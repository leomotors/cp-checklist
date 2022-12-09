import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RawCourseWhereInput } from './raw-course-where.input';
import { Type } from 'class-transformer';
import { RawCourseOrderByWithRelationInput } from './raw-course-order-by-with-relation.input';
import { RawCourseWhereUniqueInput } from './raw-course-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RawCourseCountAggregateInput } from './raw-course-count-aggregate.input';
import { RawCourseAvgAggregateInput } from './raw-course-avg-aggregate.input';
import { RawCourseSumAggregateInput } from './raw-course-sum-aggregate.input';
import { RawCourseMinAggregateInput } from './raw-course-min-aggregate.input';
import { RawCourseMaxAggregateInput } from './raw-course-max-aggregate.input';

@ArgsType()
export class RawCourseAggregateArgs {

    @Field(() => RawCourseWhereInput, {nullable:true})
    @Type(() => RawCourseWhereInput)
    where?: RawCourseWhereInput;

    @Field(() => [RawCourseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RawCourseOrderByWithRelationInput>;

    @Field(() => RawCourseWhereUniqueInput, {nullable:true})
    cursor?: RawCourseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RawCourseCountAggregateInput, {nullable:true})
    _count?: RawCourseCountAggregateInput;

    @Field(() => RawCourseAvgAggregateInput, {nullable:true})
    _avg?: RawCourseAvgAggregateInput;

    @Field(() => RawCourseSumAggregateInput, {nullable:true})
    _sum?: RawCourseSumAggregateInput;

    @Field(() => RawCourseMinAggregateInput, {nullable:true})
    _min?: RawCourseMinAggregateInput;

    @Field(() => RawCourseMaxAggregateInput, {nullable:true})
    _max?: RawCourseMaxAggregateInput;
}
