import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseWhereInput } from './course-where.input';
import { Type } from 'class-transformer';
import { CourseOrderByWithRelationInput } from './course-order-by-with-relation.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CourseScalarFieldEnum } from './course-scalar-field.enum';

@ArgsType()
export class FindManyCourseArgs {

    @Field(() => CourseWhereInput, {nullable:true})
    @Type(() => CourseWhereInput)
    where?: CourseWhereInput;

    @Field(() => [CourseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CourseOrderByWithRelationInput>;

    @Field(() => CourseWhereUniqueInput, {nullable:true})
    cursor?: CourseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CourseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CourseScalarFieldEnum>;
}
