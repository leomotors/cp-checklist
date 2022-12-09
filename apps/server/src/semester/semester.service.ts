import { Injectable } from "@nestjs/common";

import { Semester } from "@generated/semester/semester.model";

import { PrismaService } from "src/prisma.service";

@Injectable()
export class SemesterService {
  constructor(private readonly prisma: PrismaService) {}

  // Field Resolvers

  user(semester: Semester) {
    return this.prisma.semester
      .findUniqueOrThrow({ where: { id: semester.id } })
      .user();
  }

  courses(semester: Semester) {
    return this.prisma.semester
      .findUniqueOrThrow({ where: { id: semester.id } })
      .courses();
  }
}
