import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereInput } from './course-where.input';

@InputType()
export class CourseListRelationFilter {

    @Field(() => CourseWhereInput, {nullable:true})
    every?: CourseWhereInput;

    @Field(() => CourseWhereInput, {nullable:true})
    some?: CourseWhereInput;

    @Field(() => CourseWhereInput, {nullable:true})
    none?: CourseWhereInput;
}
