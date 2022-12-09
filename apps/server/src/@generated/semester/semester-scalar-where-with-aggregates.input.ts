import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class SemesterScalarWhereWithAggregatesInput {

    @Field(() => [SemesterScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SemesterScalarWhereWithAggregatesInput>;

    @Field(() => [SemesterScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SemesterScalarWhereWithAggregatesInput>;

    @Field(() => [SemesterScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SemesterScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    year?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    semester?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
