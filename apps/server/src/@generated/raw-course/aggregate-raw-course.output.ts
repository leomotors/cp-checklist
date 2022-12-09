import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RawCourseCountAggregate } from './raw-course-count-aggregate.output';
import { RawCourseAvgAggregate } from './raw-course-avg-aggregate.output';
import { RawCourseSumAggregate } from './raw-course-sum-aggregate.output';
import { RawCourseMinAggregate } from './raw-course-min-aggregate.output';
import { RawCourseMaxAggregate } from './raw-course-max-aggregate.output';

@ObjectType()
export class AggregateRawCourse {

    @Field(() => RawCourseCountAggregate, {nullable:true})
    _count?: RawCourseCountAggregate;

    @Field(() => RawCourseAvgAggregate, {nullable:true})
    _avg?: RawCourseAvgAggregate;

    @Field(() => RawCourseSumAggregate, {nullable:true})
    _sum?: RawCourseSumAggregate;

    @Field(() => RawCourseMinAggregate, {nullable:true})
    _min?: RawCourseMinAggregate;

    @Field(() => RawCourseMaxAggregate, {nullable:true})
    _max?: RawCourseMaxAggregate;
}
