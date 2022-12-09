import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { CourseCount } from "@generated/course/course-count.output";
import { Course } from "@generated/course/course.model";
import { FindManyCourseArgs } from "@generated/course/find-many-course.args";
import { Semester } from "@generated/semester/semester.model";

import { CourseService } from "./course.service";

@Resolver(() => Course)
export class CourseResolver {
  constructor(private readonly service: CourseService) {}

  @Query(() => [Course])
  courses(@Args() args: FindManyCourseArgs) {
    return this.service.findMany(args);
  }

  @ResolveField(() => [Semester])
  semesters(@Parent() course: Course) {
    return this.service.semesters(course);
  }

  @ResolveField(() => CourseCount)
  _count(@Parent() course: Course) {
    return this.service._count(course);
  }
}
