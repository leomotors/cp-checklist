import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RawCourseUpdateInput } from './raw-course-update.input';
import { Type } from 'class-transformer';
import { RawCourseWhereUniqueInput } from './raw-course-where-unique.input';

@ArgsType()
export class UpdateOneRawCourseArgs {

    @Field(() => RawCourseUpdateInput, {nullable:false})
    @Type(() => RawCourseUpdateInput)
    data!: RawCourseUpdateInput;

    @Field(() => RawCourseWhereUniqueInput, {nullable:false})
    @Type(() => RawCourseWhereUniqueInput)
    where!: RawCourseWhereUniqueInput;
}
