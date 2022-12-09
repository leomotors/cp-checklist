import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSemestersInput } from './user-update-without-semesters.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSemestersInput } from './user-create-without-semesters.input';

@InputType()
export class UserUpsertWithoutSemestersInput {

    @Field(() => UserUpdateWithoutSemestersInput, {nullable:false})
    @Type(() => UserUpdateWithoutSemestersInput)
    update!: UserUpdateWithoutSemestersInput;

    @Field(() => UserCreateWithoutSemestersInput, {nullable:false})
    @Type(() => UserCreateWithoutSemestersInput)
    create!: UserCreateWithoutSemestersInput;
}
