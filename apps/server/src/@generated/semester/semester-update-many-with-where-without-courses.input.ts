import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterScalarWhereInput } from './semester-scalar-where.input';
import { Type } from 'class-transformer';
import { SemesterUpdateManyMutationInput } from './semester-update-many-mutation.input';

@InputType()
export class SemesterUpdateManyWithWhereWithoutCoursesInput {

    @Field(() => SemesterScalarWhereInput, {nullable:false})
    @Type(() => SemesterScalarWhereInput)
    where!: SemesterScalarWhereInput;

    @Field(() => SemesterUpdateManyMutationInput, {nullable:false})
    @Type(() => SemesterUpdateManyMutationInput)
    data!: SemesterUpdateManyMutationInput;
}
