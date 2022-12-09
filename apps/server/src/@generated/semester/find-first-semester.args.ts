import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SemesterWhereInput } from './semester-where.input';
import { Type } from 'class-transformer';
import { SemesterOrderByWithRelationInput } from './semester-order-by-with-relation.input';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SemesterScalarFieldEnum } from './semester-scalar-field.enum';

@ArgsType()
export class FindFirstSemesterArgs {

    @Field(() => SemesterWhereInput, {nullable:true})
    @Type(() => SemesterWhereInput)
    where?: SemesterWhereInput;

    @Field(() => [SemesterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SemesterOrderByWithRelationInput>;

    @Field(() => SemesterWhereUniqueInput, {nullable:true})
    cursor?: SemesterWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SemesterScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SemesterScalarFieldEnum>;
}
