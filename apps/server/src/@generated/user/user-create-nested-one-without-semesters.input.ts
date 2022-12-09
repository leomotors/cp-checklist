import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSemestersInput } from './user-create-without-semesters.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSemestersInput } from './user-create-or-connect-without-semesters.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSemestersInput {

    @Field(() => UserCreateWithoutSemestersInput, {nullable:true})
    @Type(() => UserCreateWithoutSemestersInput)
    create?: UserCreateWithoutSemestersInput;

    @Field(() => UserCreateOrConnectWithoutSemestersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSemestersInput)
    connectOrCreate?: UserCreateOrConnectWithoutSemestersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
