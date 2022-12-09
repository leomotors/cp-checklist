import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SemesterWhereInput } from './semester-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySemesterArgs {

    @Field(() => SemesterWhereInput, {nullable:true})
    @Type(() => SemesterWhereInput)
    where?: SemesterWhereInput;
}
