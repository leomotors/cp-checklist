import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RawCourseWhereInput } from './raw-course-where.input';
import { Type } from 'class-transformer';
import { RawCourseOrderByWithRelationInput } from './raw-course-order-by-with-relation.input';
import { RawCourseWhereUniqueInput } from './raw-course-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RawCourseScalarFieldEnum } from './raw-course-scalar-field.enum';

@ArgsType()
export class FindFirstRawCourseArgs {

    @Field(() => RawCourseWhereInput, {nullable:true})
    @Type(() => RawCourseWhereInput)
    where?: RawCourseWhereInput;

    @Field(() => [RawCourseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RawCourseOrderByWithRelationInput>;

    @Field(() => RawCourseWhereUniqueInput, {nullable:true})
    cursor?: RawCourseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RawCourseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RawCourseScalarFieldEnum>;
}
