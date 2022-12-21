import { Injectable } from "@nestjs/common";

import { User } from "@generated/user/user.model";

import { CourseService } from "src/course/course.service";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ChecklistService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly courseService: CourseService
  ) {}

  async computeChecklist(user: User) {
    const enrolled = new Set(await this.courseService.allMyCourses(user));
  }
}
