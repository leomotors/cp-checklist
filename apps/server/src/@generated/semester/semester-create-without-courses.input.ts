import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSemesterInput } from '../user/user-create-nested-one-without-semester.input';

@InputType()
export class SemesterCreateWithoutCoursesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:false})
    semester!: number;

    @Field(() => UserCreateNestedOneWithoutSemesterInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSemesterInput;
}
