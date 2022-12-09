import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterCreateNestedManyWithoutUserInput } from '../semester/semester-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => SemesterCreateNestedManyWithoutUserInput, {nullable:true})
    Semester?: SemesterCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
