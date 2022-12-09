import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RawCourseCreateManyInput } from './raw-course-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRawCourseArgs {

    @Field(() => [RawCourseCreateManyInput], {nullable:false})
    @Type(() => RawCourseCreateManyInput)
    data!: Array<RawCourseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
