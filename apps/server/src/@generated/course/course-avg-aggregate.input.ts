import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CourseAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    credit?: true;
}
