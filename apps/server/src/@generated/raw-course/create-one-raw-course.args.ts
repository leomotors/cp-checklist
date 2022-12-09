import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RawCourseCreateInput } from './raw-course-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRawCourseArgs {

    @Field(() => RawCourseCreateInput, {nullable:false})
    @Type(() => RawCourseCreateInput)
    data!: RawCourseCreateInput;
}
