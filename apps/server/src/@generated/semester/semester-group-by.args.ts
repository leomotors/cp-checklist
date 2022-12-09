import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SemesterWhereInput } from './semester-where.input';
import { Type } from 'class-transformer';
import { SemesterOrderByWithAggregationInput } from './semester-order-by-with-aggregation.input';
import { SemesterScalarFieldEnum } from './semester-scalar-field.enum';
import { SemesterScalarWhereWithAggregatesInput } from './semester-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SemesterCountAggregateInput } from './semester-count-aggregate.input';
import { SemesterAvgAggregateInput } from './semester-avg-aggregate.input';
import { SemesterSumAggregateInput } from './semester-sum-aggregate.input';
import { SemesterMinAggregateInput } from './semester-min-aggregate.input';
import { SemesterMaxAggregateInput } from './semester-max-aggregate.input';

@ArgsType()
export class SemesterGroupByArgs {

    @Field(() => SemesterWhereInput, {nullable:true})
    @Type(() => SemesterWhereInput)
    where?: SemesterWhereInput;

    @Field(() => [SemesterOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SemesterOrderByWithAggregationInput>;

    @Field(() => [SemesterScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SemesterScalarFieldEnum>;

    @Field(() => SemesterScalarWhereWithAggregatesInput, {nullable:true})
    having?: SemesterScalarWhereWithAggregatesInput;

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
