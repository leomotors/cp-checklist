import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSemesterInput } from './user-update-without-semester.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSemesterInput } from './user-create-without-semester.input';

@InputType()
export class UserUpsertWithoutSemesterInput {

    @Field(() => UserUpdateWithoutSemesterInput, {nullable:false})
    @Type(() => UserUpdateWithoutSemesterInput)
    update!: UserUpdateWithoutSemesterInput;

    @Field(() => UserCreateWithoutSemesterInput, {nullable:false})
    @Type(() => UserCreateWithoutSemesterInput)
    create!: UserCreateWithoutSemesterInput;
}
