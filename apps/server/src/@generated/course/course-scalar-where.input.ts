import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumGenEdTypeFilter } from '../prisma/enum-gen-ed-type-filter.input';

@InputType()
export class CourseScalarWhereInput {

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    AND?: Array<CourseScalarWhereInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    OR?: Array<CourseScalarWhereInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    NOT?: Array<CourseScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    courseNo?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    abbrName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    courseNameEn?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    courseNameTh?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    courseDescEn?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    courseDescTh?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    courseCondition?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    credit?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    creditHours?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    department?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    faculty?: StringFilter;

    @Field(() => EnumGenEdTypeFilter, {nullable:true})
    genEdType?: EnumGenEdTypeFilter;
}
