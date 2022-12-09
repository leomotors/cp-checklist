import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterCreateManyUserInput } from './semester-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class SemesterCreateManyUserInputEnvelope {

    @Field(() => [SemesterCreateManyUserInput], {nullable:false})
    @Type(() => SemesterCreateManyUserInput)
    data!: Array<SemesterCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
