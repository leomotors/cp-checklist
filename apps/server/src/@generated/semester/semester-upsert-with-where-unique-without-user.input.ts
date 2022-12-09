import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';
import { Type } from 'class-transformer';
import { SemesterUpdateWithoutUserInput } from './semester-update-without-user.input';
import { SemesterCreateWithoutUserInput } from './semester-create-without-user.input';

@InputType()
export class SemesterUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SemesterWhereUniqueInput, {nullable:false})
    @Type(() => SemesterWhereUniqueInput)
    where!: SemesterWhereUniqueInput;

    @Field(() => SemesterUpdateWithoutUserInput, {nullable:false})
    @Type(() => SemesterUpdateWithoutUserInput)
    update!: SemesterUpdateWithoutUserInput;

    @Field(() => SemesterCreateWithoutUserInput, {nullable:false})
    @Type(() => SemesterCreateWithoutUserInput)
    create!: SemesterCreateWithoutUserInput;
}
