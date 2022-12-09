import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSemestersInput } from './user-create-without-semesters.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSemestersInput } from './user-create-or-connect-without-semesters.input';
import { UserUpsertWithoutSemestersInput } from './user-upsert-without-semesters.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSemestersInput } from './user-update-without-semesters.input';

@InputType()
export class UserUpdateOneRequiredWithoutSemestersNestedInput {

    @Field(() => UserCreateWithoutSemestersInput, {nullable:true})
    @Type(() => UserCreateWithoutSemestersInput)
    create?: UserCreateWithoutSemestersInput;

    @Field(() => UserCreateOrConnectWithoutSemestersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSemestersInput)
    connectOrCreate?: UserCreateOrConnectWithoutSemestersInput;

    @Field(() => UserUpsertWithoutSemestersInput, {nullable:true})
    @Type(() => UserUpsertWithoutSemestersInput)
    upsert?: UserUpsertWithoutSemestersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSemestersInput, {nullable:true})
    @Type(() => UserUpdateWithoutSemestersInput)
    update?: UserUpdateWithoutSemestersInput;
}
