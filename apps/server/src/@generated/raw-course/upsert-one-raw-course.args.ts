import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RawCourseWhereUniqueInput } from './raw-course-where-unique.input';
import { Type } from 'class-transformer';
import { RawCourseCreateInput } from './raw-course-create.input';
import { RawCourseUpdateInput } from './raw-course-update.input';

@ArgsType()
export class UpsertOneRawCourseArgs {

    @Field(() => RawCourseWhereUniqueInput, {nullable:false})
    @Type(() => RawCourseWhereUniqueInput)
    where!: RawCourseWhereUniqueInput;

    @Field(() => RawCourseCreateInput, {nullable:false})
    @Type(() => RawCourseCreateInput)
    create!: RawCourseCreateInput;

    @Field(() => RawCourseUpdateInput, {nullable:false})
    @Type(() => RawCourseUpdateInput)
    update!: RawCourseUpdateInput;
}
