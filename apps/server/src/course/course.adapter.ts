import { Injectable } from "@nestjs/common";

import { FindManyCourseArgs } from "@generated/course/find-many-course.args";

import { SearchCourseArgs } from "./course.dto";

@Injectable()
export class CourseAdapter {
  searchCourses(args: SearchCourseArgs): FindManyCourseArgs {
    const cond = { contains: args.query, mode: "insensitive" };

    return {
      take: args.take,
      where: {
        OR: ["abbrName", "courseNameEn", "courseNameTh", "courseNo"].map(
          (field) => ({ [field]: cond })
        ),
      },
    };
  }
}
