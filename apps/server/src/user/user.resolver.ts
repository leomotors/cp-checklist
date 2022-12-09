import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { Semester } from "@generated/semester/semester.model";
import { FindManyUserArgs } from "@generated/user/find-many-user.args";
import { UserCount } from "@generated/user/user-count.output";
import { User } from "@generated/user/user.model";

import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Query(() => [User])
  users(@Args() args: FindManyUserArgs) {
    return this.service.findMany(args);
  }

  @ResolveField(() => [Semester])
  semesters(@Parent() user: User) {
    return this.service.semesters(user);
  }

  @ResolveField(() => UserCount)
  _count(@Parent() user: User) {
    return this.service._count(user);
  }
}
