import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RawCourseSumAggregate {

    @Field(() => Float, {nullable:true})
    credit?: number;
}
