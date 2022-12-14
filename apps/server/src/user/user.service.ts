import { Injectable } from "@nestjs/common";

import { FindManyUserArgs } from "@generated/user/find-many-user.args";
import { User } from "@generated/user/user.model";

import { PrismaService } from "src/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  findUniqueOrThrow(id: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: { id },
    });
  }

  // Field Resolvers

  semesters(user: User) {
    return this.prisma.user
      .findUniqueOrThrow({ where: { id: user.id } })
      .semesters();
  }

  async _count(user: User) {
    return (
      await this.prisma.user.findUniqueOrThrow({
        where: { id: user.id },
        select: { _count: true },
      })
    )._count;
  }
}
