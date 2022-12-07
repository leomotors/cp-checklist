import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CourseSumAggregate {

    @Field(() => Float, {nullable:true})
    credit?: number;
}
