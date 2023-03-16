import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CourseListRelationFilter } from '../course/course-list-relation-filter.input';

@InputType()
export class SemesterWhereInput {

    @Field(() => [SemesterWhereInput], {nullable:true})
    AND?: Array<SemesterWhereInput>;

    @Field(() => [SemesterWhereInput], {nullable:true})
    OR?: Array<SemesterWhereInput>;

    @Field(() => [SemesterWhereInput], {nullable:true})
    NOT?: Array<SemesterWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => CourseListRelationFilter, {nullable:true})
    courses?: CourseListRelationFilter;
}
