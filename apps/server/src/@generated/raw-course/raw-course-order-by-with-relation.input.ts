import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

@InputType()
export class RawCourseOrderByWithRelationInput {

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

    @Field(() => SortOrderInput, {nullable:true})
    courseDescEn?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    courseDescTh?: SortOrderInput;

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
}
