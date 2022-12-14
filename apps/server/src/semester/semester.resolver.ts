import {
  Args,
  Float,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { Course } from "@generated/course/course.model";
import { SemesterCount } from "@generated/semester/semester-count.output";
import { Semester } from "@generated/semester/semester.model";
import { User } from "@generated/user/user.model";

import { Permission } from "src/auth/auth.decorator";
import { UserContext } from "src/user/user.decorator";

import { CourseActionArgs, CreateSemesterArgs } from "./semester.dto";
import { SemesterService } from "./semester.service";

@Resolver(() => Semester)
@Permission("User")
export class SemesterResolver {
  constructor(private readonly service: SemesterService) {}

  @Query(() => [Semester])
  mySemesters(@UserContext() user: User) {
    return this.service.mySemesters(user.id);
  }

  @Mutation(() => Semester)
  createSemester(@Args() args: CreateSemesterArgs, @UserContext() user: User) {
    return this.service.create(args, user.id);
  }

  @Mutation(() => Semester)
  addCourse(@Args() args: CourseActionArgs, @UserContext() user: User) {
    return this.service.addCourse(args, user.id);
  }

  @Mutation(() => Semester)
  removeCourse(@Args() args: CourseActionArgs, @UserContext() user: User) {
    return this.service.removeCourse(args, user.id);
  }

  @ResolveField(() => User)
  user(@Parent() semester: Semester) {
    return this.service.user(semester);
  }

  @ResolveField(() => [Course])
  courses(@Parent() semester: Semester) {
    return this.service.courses(semester);
  }

  @ResolveField(() => Float)
  totalCredits(@Parent() semester: Semester) {
    return this.service.totalCredits(semester);
  }

  @ResolveField(() => SemesterCount)
  _count(@Parent() semester: Semester) {
    return this.service._count(semester);
  }
}
