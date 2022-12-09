import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterWhereInput } from './semester-where.input';

@InputType()
export class SemesterListRelationFilter {

    @Field(() => SemesterWhereInput, {nullable:true})
    every?: SemesterWhereInput;

    @Field(() => SemesterWhereInput, {nullable:true})
    some?: SemesterWhereInput;

    @Field(() => SemesterWhereInput, {nullable:true})
    none?: SemesterWhereInput;
}
