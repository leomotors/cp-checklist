import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GenEdType } from '../prisma/gen-ed-type.enum';
import { Semester } from '../semester/semester.model';
import { CourseCount } from './course-count.output';

@ObjectType()
export class Course {

    @Field(() => ID, {nullable:false})
    courseNo!: string;

    @Field(() => String, {nullable:false})
    abbrName!: string;

    @Field(() => String, {nullable:false})
    courseNameEn!: string;

    @Field(() => String, {nullable:false})
    courseNameTh!: string;

    @Field(() => String, {nullable:true})
    courseDescEn!: string | null;

    @Field(() => String, {nullable:true})
    courseDescTh!: string | null;

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

    @Field(() => [Semester], {nullable:true})
    semesters?: Array<Semester>;

    @Field(() => CourseCount, {nullable:false})
    _count?: CourseCount;
}
