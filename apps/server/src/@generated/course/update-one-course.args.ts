import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseUpdateInput } from './course-update.input';
import { Type } from 'class-transformer';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@ArgsType()
export class UpdateOneCourseArgs {

    @Field(() => CourseUpdateInput, {nullable:false})
    @Type(() => CourseUpdateInput)
    data!: CourseUpdateInput;

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;
}
