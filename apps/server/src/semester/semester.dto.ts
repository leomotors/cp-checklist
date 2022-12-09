import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class CreateSemesterArgs {
  @Field(() => Int)
  year!: number;

  @Field(() => Int)
  semester!: number;
}

@ArgsType()
export class CourseActionArgs {
  @Field()
  courseNo!: string;

  @Field()
  semesterId!: string;
}
