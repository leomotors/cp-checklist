import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseUpdateManyMutationInput } from './course-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CourseWhereInput } from './course-where.input';

@ArgsType()
export class UpdateManyCourseArgs {

    @Field(() => CourseUpdateManyMutationInput, {nullable:false})
    @Type(() => CourseUpdateManyMutationInput)
    data!: CourseUpdateManyMutationInput;

    @Field(() => CourseWhereInput, {nullable:true})
    @Type(() => CourseWhereInput)
    where?: CourseWhereInput;
}
