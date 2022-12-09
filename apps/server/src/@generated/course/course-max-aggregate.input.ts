import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CourseMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    courseNo?: true;

    @Field(() => Boolean, {nullable:true})
    abbrName?: true;

    @Field(() => Boolean, {nullable:true})
    courseNameEn?: true;

    @Field(() => Boolean, {nullable:true})
    courseNameTh?: true;

    @Field(() => Boolean, {nullable:true})
    courseDescEn?: true;

    @Field(() => Boolean, {nullable:true})
    courseDescTh?: true;

    @Field(() => Boolean, {nullable:true})
    courseCondition?: true;

    @Field(() => Boolean, {nullable:true})
    credit?: true;

    @Field(() => Boolean, {nullable:true})
    creditHours?: true;

    @Field(() => Boolean, {nullable:true})
    department?: true;

    @Field(() => Boolean, {nullable:true})
    faculty?: true;

    @Field(() => Boolean, {nullable:true})
    genEdType?: true;
}
