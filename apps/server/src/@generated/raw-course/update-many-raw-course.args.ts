import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RawCourseUpdateManyMutationInput } from './raw-course-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RawCourseWhereInput } from './raw-course-where.input';

@ArgsType()
export class UpdateManyRawCourseArgs {

    @Field(() => RawCourseUpdateManyMutationInput, {nullable:false})
    @Type(() => RawCourseUpdateManyMutationInput)
    data!: RawCourseUpdateManyMutationInput;

    @Field(() => RawCourseWhereInput, {nullable:true})
    @Type(() => RawCourseWhereInput)
    where?: RawCourseWhereInput;
}
