import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RawCourseAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    credit?: true;
}
