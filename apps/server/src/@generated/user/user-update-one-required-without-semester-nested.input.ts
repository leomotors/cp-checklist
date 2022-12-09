import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSemesterInput } from './user-create-without-semester.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSemesterInput } from './user-create-or-connect-without-semester.input';
import { UserUpsertWithoutSemesterInput } from './user-upsert-without-semester.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSemesterInput } from './user-update-without-semester.input';

@InputType()
export class UserUpdateOneRequiredWithoutSemesterNestedInput {

    @Field(() => UserCreateWithoutSemesterInput, {nullable:true})
    @Type(() => UserCreateWithoutSemesterInput)
    create?: UserCreateWithoutSemesterInput;

    @Field(() => UserCreateOrConnectWithoutSemesterInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSemesterInput)
    connectOrCreate?: UserCreateOrConnectWithoutSemesterInput;

    @Field(() => UserUpsertWithoutSemesterInput, {nullable:true})
    @Type(() => UserUpsertWithoutSemesterInput)
    upsert?: UserUpsertWithoutSemesterInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSemesterInput, {nullable:true})
    @Type(() => UserUpdateWithoutSemesterInput)
    update?: UserUpdateWithoutSemesterInput;
}
