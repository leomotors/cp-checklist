import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RawCourseWhereUniqueInput } from './raw-course-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRawCourseOrThrowArgs {

    @Field(() => RawCourseWhereUniqueInput, {nullable:false})
    @Type(() => RawCourseWhereUniqueInput)
    where!: RawCourseWhereUniqueInput;
}
