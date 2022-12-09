import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumGenEdTypeFilter } from '../prisma/enum-gen-ed-type-filter.input';
import { SemesterListRelationFilter } from '../semester/semester-list-relation-filter.input';

@InputType()
export class CourseWhereInput {

    @Field(() => [CourseWhereInput], {nullable:true})
    AND?: Array<CourseWhereInput>;

    @Field(() => [CourseWhereInput], {nullable:true})
    OR?: Array<CourseWhereInput>;

    @Field(() => [CourseWhereInput], {nullable:true})
    NOT?: Array<CourseWhereInput>;

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

    @Field(() => SemesterListRelationFilter, {nullable:true})
    semesters?: SemesterListRelationFilter;
}
