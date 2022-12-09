import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SemesterScalarWhereInput {

    @Field(() => [SemesterScalarWhereInput], {nullable:true})
    AND?: Array<SemesterScalarWhereInput>;

    @Field(() => [SemesterScalarWhereInput], {nullable:true})
    OR?: Array<SemesterScalarWhereInput>;

    @Field(() => [SemesterScalarWhereInput], {nullable:true})
    NOT?: Array<SemesterScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    year?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    semester?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
