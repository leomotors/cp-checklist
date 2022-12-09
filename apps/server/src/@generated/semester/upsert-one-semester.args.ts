import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';
import { Type } from 'class-transformer';
import { SemesterCreateInput } from './semester-create.input';
import { SemesterUpdateInput } from './semester-update.input';

@ArgsType()
export class UpsertOneSemesterArgs {

    @Field(() => SemesterWhereUniqueInput, {nullable:false})
    @Type(() => SemesterWhereUniqueInput)
    where!: SemesterWhereUniqueInput;

    @Field(() => SemesterCreateInput, {nullable:false})
    @Type(() => SemesterCreateInput)
    create!: SemesterCreateInput;

    @Field(() => SemesterUpdateInput, {nullable:false})
    @Type(() => SemesterUpdateInput)
    update!: SemesterUpdateInput;
}
