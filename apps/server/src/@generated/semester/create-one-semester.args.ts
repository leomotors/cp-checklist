import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SemesterCreateInput } from './semester-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSemesterArgs {

    @Field(() => SemesterCreateInput, {nullable:false})
    @Type(() => SemesterCreateInput)
    data!: SemesterCreateInput;
}
