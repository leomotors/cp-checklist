import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Type } from 'class-transformer';
import { CourseCreateInput } from './course-create.input';
import { CourseUpdateInput } from './course-update.input';

@ArgsType()
export class UpsertOneCourseArgs {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateInput, {nullable:false})
    @Type(() => CourseCreateInput)
    create!: CourseCreateInput;

    @Field(() => CourseUpdateInput, {nullable:false})
    @Type(() => CourseUpdateInput)
    update!: CourseUpdateInput;
}
