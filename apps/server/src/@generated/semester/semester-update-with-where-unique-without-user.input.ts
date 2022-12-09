import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';
import { Type } from 'class-transformer';
import { SemesterUpdateWithoutUserInput } from './semester-update-without-user.input';

@InputType()
export class SemesterUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => SemesterWhereUniqueInput, {nullable:false})
    @Type(() => SemesterWhereUniqueInput)
    where!: SemesterWhereUniqueInput;

    @Field(() => SemesterUpdateWithoutUserInput, {nullable:false})
    @Type(() => SemesterUpdateWithoutUserInput)
    data!: SemesterUpdateWithoutUserInput;
}
