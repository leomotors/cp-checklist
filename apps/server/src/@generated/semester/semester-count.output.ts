import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SemesterCount {

    @Field(() => Int, {nullable:false})
    courses?: number;
}
