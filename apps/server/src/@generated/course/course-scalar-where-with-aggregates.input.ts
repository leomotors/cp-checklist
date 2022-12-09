import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { EnumGenEdTypeWithAggregatesFilter } from '../prisma/enum-gen-ed-type-with-aggregates-filter.input';

@InputType()
export class CourseScalarWhereWithAggregatesInput {

    @Field(() => [CourseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CourseScalarWhereWithAggregatesInput>;

    @Field(() => [CourseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CourseScalarWhereWithAggregatesInput>;

    @Field(() => [CourseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CourseScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    courseNo?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    abbrName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    courseNameEn?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    courseNameTh?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    courseDescEn?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    courseDescTh?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    courseCondition?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    credit?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    creditHours?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    department?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    faculty?: StringWithAggregatesFilter;

    @Field(() => EnumGenEdTypeWithAggregatesFilter, {nullable:true})
    genEdType?: EnumGenEdTypeWithAggregatesFilter;
}
