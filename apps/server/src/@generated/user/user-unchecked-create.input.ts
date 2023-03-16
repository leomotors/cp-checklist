import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterUncheckedCreateNestedManyWithoutUserInput } from '../semester/semester-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SemesterUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    semesters?: SemesterUncheckedCreateNestedManyWithoutUserInput;
}
