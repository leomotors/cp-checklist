import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GenEdType } from '../prisma/gen-ed-type.enum';
import { RawCourseCountAggregate } from './raw-course-count-aggregate.output';
import { RawCourseAvgAggregate } from './raw-course-avg-aggregate.output';
import { RawCourseSumAggregate } from './raw-course-sum-aggregate.output';
import { RawCourseMinAggregate } from './raw-course-min-aggregate.output';
import { RawCourseMaxAggregate } from './raw-course-max-aggregate.output';

@ObjectType()
export class RawCourseGroupBy {

    @Field(() => String, {nullable:false})
    courseNo!: string;

    @Field(() => String, {nullable:false})
    academicYear!: string;

    @Field(() => String, {nullable:false})
    semester!: string;

    @Field(() => String, {nullable:false})
    studyProgram!: string;

    @Field(() => String, {nullable:false})
    abbrName!: string;

    @Field(() => String, {nullable:false})
    courseNameEn!: string;

    @Field(() => String, {nullable:false})
    courseNameTh!: string;

    @Field(() => String, {nullable:true})
    courseDescEn?: string;

    @Field(() => String, {nullable:true})
    courseDescTh?: string;

    @Field(() => String, {nullable:false})
    courseCondition!: string;

    @Field(() => Float, {nullable:false})
    credit!: number;

    @Field(() => String, {nullable:false})
    creditHours!: string;

    @Field(() => String, {nullable:false})
    department!: string;

    @Field(() => String, {nullable:false})
    faculty!: string;

    @Field(() => GenEdType, {nullable:false})
    genEdType!: keyof typeof GenEdType;

    @Field(() => RawCourseCountAggregate, {nullable:true})
    _count?: RawCourseCountAggregate;

    @Field(() => RawCourseAvgAggregate, {nullable:true})
    _avg?: RawCourseAvgAggregate;

    @Field(() => RawCourseSumAggregate, {nullable:true})
    _sum?: RawCourseSumAggregate;

    @Field(() => RawCourseMinAggregate, {nullable:true})
    _min?: RawCourseMinAggregate;

    @Field(() => RawCourseMaxAggregate, {nullable:true})
    _max?: RawCourseMaxAggregate;
}
