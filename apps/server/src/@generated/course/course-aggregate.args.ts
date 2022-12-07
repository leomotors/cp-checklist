import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseWhereInput } from './course-where.input';
import { Type } from 'class-transformer';
import { CourseOrderByWithRelationInput } from './course-order-by-with-relation.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CourseCountAggregateInput } from './course-count-aggregate.input';
import { CourseAvgAggregateInput } from './course-avg-aggregate.input';
import { CourseSumAggregateInput } from './course-sum-aggregate.input';
import { CourseMinAggregateInput } from './course-min-aggregate.input';
import { CourseMaxAggregateInput } from './course-max-aggregate.input';

@ArgsType()
export class CourseAggregateArgs {

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

    @Field(() => CourseCountAggregateInput, {nullable:true})
    _count?: CourseCountAggregateInput;

    @Field(() => CourseAvgAggregateInput, {nullable:true})
    _avg?: CourseAvgAggregateInput;

    @Field(() => CourseSumAggregateInput, {nullable:true})
    _sum?: CourseSumAggregateInput;

    @Field(() => CourseMinAggregateInput, {nullable:true})
    _min?: CourseMinAggregateInput;

    @Field(() => CourseMaxAggregateInput, {nullable:true})
    _max?: CourseMaxAggregateInput;
}
