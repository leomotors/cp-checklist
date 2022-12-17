import { ArgsType, Field, Int, ObjectType, OmitType } from "@nestjs/graphql";

import { Course } from "@generated/course/course.model";

@ObjectType()
export class PublicCourse extends OmitType(Course, ["semesters", "_count"]) {}

@ArgsType()
export class SearchCourseArgs {
  @Field()
  query!: string;

  @Field(() => Int)
  take!: number;
}
