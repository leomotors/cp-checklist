import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RawCourseCountAggregate {

    @Field(() => Int, {nullable:false})
    courseNo!: number;

    @Field(() => Int, {nullable:false})
    academicYear!: number;

    @Field(() => Int, {nullable:false})
    semester!: number;

    @Field(() => Int, {nullable:false})
    studyProgram!: number;

    @Field(() => Int, {nullable:false})
    abbrName!: number;

    @Field(() => Int, {nullable:false})
    courseNameEn!: number;

    @Field(() => Int, {nullable:false})
    courseNameTh!: number;

    @Field(() => Int, {nullable:false})
    courseDescEn!: number;

    @Field(() => Int, {nullable:false})
    courseDescTh!: number;

    @Field(() => Int, {nullable:false})
    courseCondition!: number;

    @Field(() => Int, {nullable:false})
    credit!: number;

    @Field(() => Int, {nullable:false})
    creditHours!: number;

    @Field(() => Int, {nullable:false})
    department!: number;

    @Field(() => Int, {nullable:false})
    faculty!: number;

    @Field(() => Int, {nullable:false})
    genEdType!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
