import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CourseAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    credit?: keyof typeof SortOrder;
}
