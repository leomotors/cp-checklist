import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SemesterUpdateManyMutationInput } from './semester-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SemesterWhereInput } from './semester-where.input';

@ArgsType()
export class UpdateManySemesterArgs {

    @Field(() => SemesterUpdateManyMutationInput, {nullable:false})
    @Type(() => SemesterUpdateManyMutationInput)
    data!: SemesterUpdateManyMutationInput;

    @Field(() => SemesterWhereInput, {nullable:true})
    @Type(() => SemesterWhereInput)
    where?: SemesterWhereInput;
}
