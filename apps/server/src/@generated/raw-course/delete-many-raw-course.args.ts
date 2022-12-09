import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RawCourseWhereInput } from './raw-course-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRawCourseArgs {

    @Field(() => RawCourseWhereInput, {nullable:true})
    @Type(() => RawCourseWhereInput)
    where?: RawCourseWhereInput;
}
