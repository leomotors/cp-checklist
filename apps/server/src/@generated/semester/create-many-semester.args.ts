import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SemesterCreateManyInput } from './semester-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySemesterArgs {

    @Field(() => [SemesterCreateManyInput], {nullable:false})
    @Type(() => SemesterCreateManyInput)
    data!: Array<SemesterCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
