import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSemestersInput } from './user-create-without-semesters.input';

@InputType()
export class UserCreateOrConnectWithoutSemestersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutSemestersInput, {nullable:false})
    @Type(() => UserCreateWithoutSemestersInput)
    create!: UserCreateWithoutSemestersInput;
}
