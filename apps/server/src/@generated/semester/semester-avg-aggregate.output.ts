import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class SemesterAvgAggregate {

    @Field(() => Float, {nullable:true})
    year?: number;

    @Field(() => Float, {nullable:true})
    semester?: number;
}
