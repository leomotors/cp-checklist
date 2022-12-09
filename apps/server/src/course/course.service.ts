import { Injectable } from "@nestjs/common";

import { Course } from "@generated/course/course.model";
import { FindManyCourseArgs } from "@generated/course/find-many-course.args";

import { PrismaService } from "src/prisma.service";

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyCourseArgs) {
    return this.prisma.course.findMany(args);
  }

  // Field Resolvers

  semesters(course: Course) {
    return this.prisma.course
      .findUniqueOrThrow({ where: { courseNo: course.courseNo } })
      .semesters();
  }

  async _count(course: Course) {
    return (
      await this.prisma.course.findUniqueOrThrow({
        where: { courseNo: course.courseNo },
        select: { _count: true },
      })
    )._count;
  }
}
