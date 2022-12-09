import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CourseCreateNestedManyWithoutSemestersInput } from '../course/course-create-nested-many-without-semesters.input';

@InputType()
export class SemesterCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:false})
    semester!: number;

    @Field(() => CourseCreateNestedManyWithoutSemestersInput, {nullable:true})
    courses?: CourseCreateNestedManyWithoutSemestersInput;
}
