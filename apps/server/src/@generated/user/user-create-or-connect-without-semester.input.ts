import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSemesterInput } from './user-create-without-semester.input';

@InputType()
export class UserCreateOrConnectWithoutSemesterInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSemesterInput, {nullable:false})
    @Type(() => UserCreateWithoutSemesterInput)
    create!: UserCreateWithoutSemesterInput;
}
