import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CourseCountAggregate } from './course-count-aggregate.output';
import { CourseAvgAggregate } from './course-avg-aggregate.output';
import { CourseSumAggregate } from './course-sum-aggregate.output';
import { CourseMinAggregate } from './course-min-aggregate.output';
import { CourseMaxAggregate } from './course-max-aggregate.output';

@ObjectType()
export class AggregateCourse {

    @Field(() => CourseCountAggregate, {nullable:true})
    _count?: CourseCountAggregate;

    @Field(() => CourseAvgAggregate, {nullable:true})
    _avg?: CourseAvgAggregate;

    @Field(() => CourseSumAggregate, {nullable:true})
    _sum?: CourseSumAggregate;

    @Field(() => CourseMinAggregate, {nullable:true})
    _min?: CourseMinAggregate;

    @Field(() => CourseMaxAggregate, {nullable:true})
    _max?: CourseMaxAggregate;
}
