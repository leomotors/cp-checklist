import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseCreateManyInput } from './course-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCourseArgs {

    @Field(() => [CourseCreateManyInput], {nullable:false})
    @Type(() => CourseCreateManyInput)
    data!: Array<CourseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
