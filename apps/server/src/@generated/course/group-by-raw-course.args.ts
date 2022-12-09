import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RawCourseWhereInput } from '../raw-course/raw-course-where.input';
import { Type } from 'class-transformer';
import { RawCourseOrderByWithAggregationInput } from '../raw-course/raw-course-order-by-with-aggregation.input';
import { RawCourseScalarFieldEnum } from '../raw-course/raw-course-scalar-field.enum';
import { RawCourseScalarWhereWithAggregatesInput } from '../raw-course/raw-course-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByRawCourseArgs {

    @Field(() => RawCourseWhereInput, {nullable:true})
    @Type(() => RawCourseWhereInput)
    where?: RawCourseWhereInput;

    @Field(() => [RawCourseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RawCourseOrderByWithAggregationInput>;

    @Field(() => [RawCourseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RawCourseScalarFieldEnum>;

    @Field(() => RawCourseScalarWhereWithAggregatesInput, {nullable:true})
    having?: RawCourseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
