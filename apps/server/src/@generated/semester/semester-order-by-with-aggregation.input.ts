import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SemesterCountOrderByAggregateInput } from './semester-count-order-by-aggregate.input';
import { SemesterAvgOrderByAggregateInput } from './semester-avg-order-by-aggregate.input';
import { SemesterMaxOrderByAggregateInput } from './semester-max-order-by-aggregate.input';
import { SemesterMinOrderByAggregateInput } from './semester-min-order-by-aggregate.input';
import { SemesterSumOrderByAggregateInput } from './semester-sum-order-by-aggregate.input';

@InputType()
export class SemesterOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    year?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    semester?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SemesterCountOrderByAggregateInput, {nullable:true})
    _count?: SemesterCountOrderByAggregateInput;

    @Field(() => SemesterAvgOrderByAggregateInput, {nullable:true})
    _avg?: SemesterAvgOrderByAggregateInput;

    @Field(() => SemesterMaxOrderByAggregateInput, {nullable:true})
    _max?: SemesterMaxOrderByAggregateInput;

    @Field(() => SemesterMinOrderByAggregateInput, {nullable:true})
    _min?: SemesterMinOrderByAggregateInput;

    @Field(() => SemesterSumOrderByAggregateInput, {nullable:true})
    _sum?: SemesterSumOrderByAggregateInput;
}
