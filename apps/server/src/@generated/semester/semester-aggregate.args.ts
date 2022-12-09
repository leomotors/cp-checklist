import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SemesterWhereInput } from './semester-where.input';
import { Type } from 'class-transformer';
import { SemesterOrderByWithRelationInput } from './semester-order-by-with-relation.input';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SemesterCountAggregateInput } from './semester-count-aggregate.input';
import { SemesterAvgAggregateInput } from './semester-avg-aggregate.input';
import { SemesterSumAggregateInput } from './semester-sum-aggregate.input';
import { SemesterMinAggregateInput } from './semester-min-aggregate.input';
import { SemesterMaxAggregateInput } from './semester-max-aggregate.input';

@ArgsType()
export class SemesterAggregateArgs {

    @Field(() => SemesterWhereInput, {nullable:true})
    @Type(() => SemesterWhereInput)
    where?: SemesterWhereInput;

    @Field(() => [SemesterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SemesterOrderByWithRelationInput>;

    @Field(() => SemesterWhereUniqueInput, {nullable:true})
    cursor?: SemesterWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SemesterCountAggregateInput, {nullable:true})
    _count?: SemesterCountAggregateInput;

    @Field(() => SemesterAvgAggregateInput, {nullable:true})
    _avg?: SemesterAvgAggregateInput;

    @Field(() => SemesterSumAggregateInput, {nullable:true})
    _sum?: SemesterSumAggregateInput;

    @Field(() => SemesterMinAggregateInput, {nullable:true})
    _min?: SemesterMinAggregateInput;

    @Field(() => SemesterMaxAggregateInput, {nullable:true})
    _max?: SemesterMaxAggregateInput;
}
