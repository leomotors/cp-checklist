import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CourseUncheckedCreateNestedManyWithoutSemestersInput } from '../course/course-unchecked-create-nested-many-without-semesters.input';

@InputType()
export class SemesterUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:false})
    semester!: number;

    @Field(() => CourseUncheckedCreateNestedManyWithoutSemestersInput, {nullable:true})
    courses?: CourseUncheckedCreateNestedManyWithoutSemestersInput;
}
