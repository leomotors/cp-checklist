import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SemesterUpdateInput } from './semester-update.input';
import { Type } from 'class-transformer';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';

@ArgsType()
export class UpdateOneSemesterArgs {

    @Field(() => SemesterUpdateInput, {nullable:false})
    @Type(() => SemesterUpdateInput)
    data!: SemesterUpdateInput;

    @Field(() => SemesterWhereUniqueInput, {nullable:false})
    @Type(() => SemesterWhereUniqueInput)
    where!: SemesterWhereUniqueInput;
}
