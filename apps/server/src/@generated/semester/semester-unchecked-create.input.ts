import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CourseUncheckedCreateNestedManyWithoutSemestersInput } from '../course/course-unchecked-create-nested-many-without-semesters.input';

@InputType()
export class SemesterUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:false})
    semester!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CourseUncheckedCreateNestedManyWithoutSemestersInput, {nullable:true})
    courses?: CourseUncheckedCreateNestedManyWithoutSemestersInput;
}
