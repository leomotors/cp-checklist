import { Injectable, NotFoundException } from "@nestjs/common";

import { Semester } from "@generated/semester/semester.model";

import { PrismaService } from "src/prisma.service";

import { CourseActionArgs, CreateSemesterArgs } from "./semester.dto";

@Injectable()
export class SemesterService {
  constructor(private readonly prisma: PrismaService) {}

  create(args: CreateSemesterArgs, userId: string) {
    return this.prisma.semester.create({
      data: {
        ...args,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  mySemesters(id: string) {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id },
      })
      .semesters();
  }

  async _userSemester(semesterId: string, userId: string) {
    const semester = await this.prisma.semester.findUnique({
      where: { id: semesterId },
    });

    if (semester?.userId !== userId) {
      throw new NotFoundException(
        "No semester with that ID or not your semester"
      );
    }

    return semester;
  }

  async addCourse(args: CourseActionArgs, userId: string) {
    await this._userSemester(args.semesterId, userId);

    return this.prisma.semester.update({
      where: { id: args.semesterId },
      data: {
        courses: {
          connect: { courseNo: args.courseNo },
        },
      },
    });
  }

  async removeCourse(args: CourseActionArgs, userId: string) {
    await this._userSemester(args.semesterId, userId);

    return this.prisma.semester.update({
      where: { id: args.semesterId },
      data: {
        courses: {
          disconnect: { courseNo: args.courseNo },
        },
      },
    });
  }

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

  async totalCredits(semester: Semester) {
    return (
      (
        await this.prisma.course.aggregate({
          where: {
            semesters: {
              some: {
                id: semester.id,
              },
            },
          },
          _sum: {
            credit: true,
          },
        })
      )._sum.credit ?? 0
    );
  }

  async _count(semester: Semester) {
    return (
      await this.prisma.semester.findUniqueOrThrow({
        where: { id: semester.id },
        select: { _count: true },
      })
    )._count;
  }
}
