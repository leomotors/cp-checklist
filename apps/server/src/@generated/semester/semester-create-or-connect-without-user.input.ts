import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';
import { Type } from 'class-transformer';
import { SemesterCreateWithoutUserInput } from './semester-create-without-user.input';

@InputType()
export class SemesterCreateOrConnectWithoutUserInput {

    @Field(() => SemesterWhereUniqueInput, {nullable:false})
    @Type(() => SemesterWhereUniqueInput)
    where!: SemesterWhereUniqueInput;

    @Field(() => SemesterCreateWithoutUserInput, {nullable:false})
    @Type(() => SemesterCreateWithoutUserInput)
    create!: SemesterCreateWithoutUserInput;
}
