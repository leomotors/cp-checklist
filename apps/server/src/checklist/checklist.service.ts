import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { User } from "@generated/user/user.model";
import { GenEdType } from "@prisma/client";

import {
  Category,
  ComputedCategory,
  ComputedChecklist,
  SaladChecklist,
} from "@cp-checklist/constants";

import { CourseService } from "src/course/course.service";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ChecklistService {
  private readonly courses = (async () =>
    (
      await this.prisma.course.findMany({
        select: {
          courseNo: true,
          credit: true,
          genEdType: true,
        },
      })
    ).reduce<Record<string, { credit: number; genEdType: GenEdType }>>(
      (prev, curr) => ({
        ...prev,
        [curr.courseNo]: { credit: curr.credit, genEdType: curr.genEdType },
      }),
      {}
    ))();

  constructor(
    private readonly prisma: PrismaService,
    private readonly courseService: CourseService
  ) {}

  async computeCategory(
    c: Category,
    enrolled: Set<string>
  ): Promise<ComputedCategory> {
    const courses = await this.courses;

    switch (c.condition) {
      case "all": {
        const satisfied: string[] = [];

        for (const req of c.courseIds) {
          if (enrolled.has(req)) {
            satisfied.push(req);
            enrolled.delete(req);
          }
        }

        return { ...c, satisfied };
      }

      case "pick": {
        const satisfied: string[] = [];
        let satisfiedCredits = 0;

        for (const req of c.courseIds) {
          if (enrolled.has(req)) {
            satisfied.push(req);
            enrolled.delete(req);
            satisfiedCredits += courses[req].credit;

            if (satisfiedCredits >= c.totalCredits) {
              break;
            }
          }
        }

        return { ...c, satisfied };
      }

      case "gened": {
        const satisfied: string[] = [];
        let satisfiedCredits = 0;

        for (const course of enrolled) {
          if (courses[course].genEdType === c.parameter) {
            satisfied.push(course);
            enrolled.delete(course);

            satisfiedCredits += courses[course].credit;

            if (satisfiedCredits >= c.totalCredits) {
              break;
            }
          }
        }

        return { ...c, satisfied };
      }

      case "credits": {
        const satisfied: string[] = [];
        let satisfiedCredits = 0;

        for (const course of enrolled) {
          satisfied.push(course);
          enrolled.delete(course);

          satisfiedCredits += courses[course].credit;

          if (satisfiedCredits >= c.totalCredits) {
            break;
          }
        }

        return { ...c, satisfied };
      }
    }
  }

  async computeChecklist(user: User) {
    const enrolled = new Set(
      (await this.courseService.allMyCourses(user)).map((c) => c.courseNo)
    );
    const dataRequired = new Set(...enrolled);

    const saladChecklist = structuredClone(SaladChecklist);

    await this.courses;

    const result: ComputedChecklist = { computed: [], coursesData: {} };

    for (const category of saladChecklist) {
      if ("categories" in category && category.categories) {
        const computedSubCate: ComputedCategory[] = [];

        for (const subcate of category.categories) {
          computedSubCate.push(await this.computeCategory(subcate, enrolled));
        }

        result.computed.push({ ...category, categories: computedSubCate });
      } else {
        result.computed.push(await this.computeCategory(category, enrolled));
      }
    }

    for (const category of result.computed) {
      if ("categories" in category && category.categories) {
        for (const subcate of category.categories) {
          subcate.satisfied.forEach((c) => dataRequired.add(c));
        }
      } else {
        if ("satisfied" in category) {
          category.satisfied.forEach((c) => dataRequired.add(c));
        } else {
          throw new InternalServerErrorException("umm typescript is right?");
        }
      }
    }

    const coursesData = await this.prisma.course.findMany({
      where: {
        courseNo: {
          in: [...dataRequired],
        },
      },
    });

    return JSON.stringify({
      computed: result.computed,
      coursesData,
    });
  }
}
