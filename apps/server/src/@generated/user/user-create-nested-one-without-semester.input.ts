import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSemesterInput } from './user-create-without-semester.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSemesterInput } from './user-create-or-connect-without-semester.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSemesterInput {

    @Field(() => UserCreateWithoutSemesterInput, {nullable:true})
    @Type(() => UserCreateWithoutSemesterInput)
    create?: UserCreateWithoutSemesterInput;

    @Field(() => UserCreateOrConnectWithoutSemesterInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSemesterInput)
    connectOrCreate?: UserCreateOrConnectWithoutSemesterInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
