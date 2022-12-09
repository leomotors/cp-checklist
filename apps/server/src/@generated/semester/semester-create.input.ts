import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSemesterInput } from '../user/user-create-nested-one-without-semester.input';
import { CourseCreateNestedManyWithoutSemestersInput } from '../course/course-create-nested-many-without-semesters.input';

@InputType()
export class SemesterCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:false})
    semester!: number;

    @Field(() => UserCreateNestedOneWithoutSemesterInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSemesterInput;

    @Field(() => CourseCreateNestedManyWithoutSemestersInput, {nullable:true})
    courses?: CourseCreateNestedManyWithoutSemestersInput;
}
