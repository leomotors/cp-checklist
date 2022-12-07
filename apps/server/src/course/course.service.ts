import { Injectable } from "@nestjs/common";

import { FindManyCourseArgs } from "@generated/course/find-many-course.args";

import { PrismaService } from "src/prisma.service";

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyCourseArgs) {
    return this.prisma.course.findMany(args);
  }
}
