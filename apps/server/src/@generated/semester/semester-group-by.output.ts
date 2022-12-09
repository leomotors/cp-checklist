import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SemesterCountAggregate } from './semester-count-aggregate.output';
import { SemesterAvgAggregate } from './semester-avg-aggregate.output';
import { SemesterSumAggregate } from './semester-sum-aggregate.output';
import { SemesterMinAggregate } from './semester-min-aggregate.output';
import { SemesterMaxAggregate } from './semester-max-aggregate.output';

@ObjectType()
export class SemesterGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:false})
    semester!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SemesterCountAggregate, {nullable:true})
    _count?: SemesterCountAggregate;

    @Field(() => SemesterAvgAggregate, {nullable:true})
    _avg?: SemesterAvgAggregate;

    @Field(() => SemesterSumAggregate, {nullable:true})
    _sum?: SemesterSumAggregate;

    @Field(() => SemesterMinAggregate, {nullable:true})
    _min?: SemesterMinAggregate;

    @Field(() => SemesterMaxAggregate, {nullable:true})
    _max?: SemesterMaxAggregate;
}
