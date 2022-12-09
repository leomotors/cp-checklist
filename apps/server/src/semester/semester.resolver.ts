import { Parent, ResolveField, Resolver } from "@nestjs/graphql";

import { Course } from "@generated/course/course.model";
import { Semester } from "@generated/semester/semester.model";
import { User } from "@generated/user/user.model";

import { SemesterService } from "./semester.service";

@Resolver(() => Semester)
export class SemesterResolver {
  constructor(private readonly service: SemesterService) {}

  @ResolveField(() => User)
  user(@Parent() semester: Semester) {
    return this.service.user(semester);
  }

  @ResolveField(() => [Course])
  courses(@Parent() semester: Semester) {
    return this.service.courses(semester);
  }
}
