import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { EnumGenEdTypeWithAggregatesFilter } from '../prisma/enum-gen-ed-type-with-aggregates-filter.input';

@InputType()
export class RawCourseScalarWhereWithAggregatesInput {

    @Field(() => [RawCourseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RawCourseScalarWhereWithAggregatesInput>;

    @Field(() => [RawCourseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RawCourseScalarWhereWithAggregatesInput>;

    @Field(() => [RawCourseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RawCourseScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    courseNo?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    academicYear?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    semester?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    studyProgram?: StringWithAggregatesFilter;

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
