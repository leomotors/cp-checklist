import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseScalarWhereInput } from './course-scalar-where.input';
import { Type } from 'class-transformer';
import { CourseUpdateManyMutationInput } from './course-update-many-mutation.input';

@InputType()
export class CourseUpdateManyWithWhereWithoutSemestersInput {

    @Field(() => CourseScalarWhereInput, {nullable:false})
    @Type(() => CourseScalarWhereInput)
    where!: CourseScalarWhereInput;

    @Field(() => CourseUpdateManyMutationInput, {nullable:false})
    @Type(() => CourseUpdateManyMutationInput)
    data!: CourseUpdateManyMutationInput;
}
