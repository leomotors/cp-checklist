import { ForbiddenException } from "@nestjs/common";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { CourseCount } from "@generated/course/course-count.output";
import { Course } from "@generated/course/course.model";
import { FindManyCourseArgs } from "@generated/course/find-many-course.args";
import { Semester } from "@generated/semester/semester.model";
import { User } from "@generated/user/user.model";

import { Permission } from "src/auth/auth.decorator";
import { AdminUser, UserContext, isAdminUser } from "src/user/user.decorator";

import { CourseAdapter } from "./course.adapter";
import { PublicCourse, SearchCourseArgs } from "./course.dto";
import { CourseService } from "./course.service";

@Resolver(() => Course)
export class CourseResolver {
  constructor(
    private readonly service: CourseService,
    private readonly adapter: CourseAdapter
  ) {}

  @Query(() => [Course])
  courses(@Args() args: FindManyCourseArgs) {
    return this.service.findMany(args);
  }

  @Query(() => [PublicCourse])
  @Permission("Public")
  searchCourses(@Args() args: SearchCourseArgs) {
    return this.service.findMany(this.adapter.searchCourses(args));
  }

  @Query(() => [PublicCourse])
  @Permission("User")
  allMyCourses(@UserContext() user: User) {
    return this.service.allMyCourses(user);
  }

  @ResolveField(() => [Semester])
  semesters(
    @Parent() course: Course,
    @UserContext({ allowAdmin: true }) user: User | AdminUser
  ) {
    if (!isAdminUser(user)) {
      throw new ForbiddenException(
        "Bruh no, you cannot access Semester on Course"
      );
    }

    return this.service.semesters(course);
  }

  @ResolveField(() => CourseCount)
  _count(@Parent() course: Course) {
    return this.service._count(course);
  }
}
