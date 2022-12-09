import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GenEdType } from '../prisma/gen-ed-type.enum';

@ObjectType()
export class CourseMinAggregate {

    @Field(() => String, {nullable:true})
    courseNo?: string;

    @Field(() => String, {nullable:true})
    abbrName?: string;

    @Field(() => String, {nullable:true})
    courseNameEn?: string;

    @Field(() => String, {nullable:true})
    courseNameTh?: string;

    @Field(() => String, {nullable:true})
    courseDescEn?: string;

    @Field(() => String, {nullable:true})
    courseDescTh?: string;

    @Field(() => String, {nullable:true})
    courseCondition?: string;

    @Field(() => Float, {nullable:true})
    credit?: number;

    @Field(() => String, {nullable:true})
    creditHours?: string;

    @Field(() => String, {nullable:true})
    department?: string;

    @Field(() => String, {nullable:true})
    faculty?: string;

    @Field(() => GenEdType, {nullable:true})
    genEdType?: keyof typeof GenEdType;
}
