import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCreateInput } from './course-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCourseArgs {

    @Field(() => CourseCreateInput, {nullable:false})
    @Type(() => CourseCreateInput)
    data!: CourseCreateInput;
}
