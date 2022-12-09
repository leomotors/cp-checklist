import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RawCourseCountOrderByAggregateInput } from './raw-course-count-order-by-aggregate.input';
import { RawCourseAvgOrderByAggregateInput } from './raw-course-avg-order-by-aggregate.input';
import { RawCourseMaxOrderByAggregateInput } from './raw-course-max-order-by-aggregate.input';
import { RawCourseMinOrderByAggregateInput } from './raw-course-min-order-by-aggregate.input';
import { RawCourseSumOrderByAggregateInput } from './raw-course-sum-order-by-aggregate.input';

@InputType()
export class RawCourseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    courseNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academicYear?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    semester?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    studyProgram?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    abbrName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseNameEn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseNameTh?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseDescEn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseDescTh?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseCondition?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    credit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditHours?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    department?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    faculty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    genEdType?: keyof typeof SortOrder;

    @Field(() => RawCourseCountOrderByAggregateInput, {nullable:true})
    _count?: RawCourseCountOrderByAggregateInput;

    @Field(() => RawCourseAvgOrderByAggregateInput, {nullable:true})
    _avg?: RawCourseAvgOrderByAggregateInput;

    @Field(() => RawCourseMaxOrderByAggregateInput, {nullable:true})
    _max?: RawCourseMaxOrderByAggregateInput;

    @Field(() => RawCourseMinOrderByAggregateInput, {nullable:true})
    _min?: RawCourseMinOrderByAggregateInput;

    @Field(() => RawCourseSumOrderByAggregateInput, {nullable:true})
    _sum?: RawCourseSumOrderByAggregateInput;
}
