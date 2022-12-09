import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutSemestersInput } from './course-create-without-semesters.input';
import { Type } from 'class-transformer';
import { CourseCreateOrConnectWithoutSemestersInput } from './course-create-or-connect-without-semesters.input';
import { CourseUpsertWithWhereUniqueWithoutSemestersInput } from './course-upsert-with-where-unique-without-semesters.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithWhereUniqueWithoutSemestersInput } from './course-update-with-where-unique-without-semesters.input';
import { CourseUpdateManyWithWhereWithoutSemestersInput } from './course-update-many-with-where-without-semesters.input';
import { CourseScalarWhereInput } from './course-scalar-where.input';

@InputType()
export class CourseUpdateManyWithoutSemestersNestedInput {

    @Field(() => [CourseCreateWithoutSemestersInput], {nullable:true})
    @Type(() => CourseCreateWithoutSemestersInput)
    create?: Array<CourseCreateWithoutSemestersInput>;

    @Field(() => [CourseCreateOrConnectWithoutSemestersInput], {nullable:true})
    @Type(() => CourseCreateOrConnectWithoutSemestersInput)
    connectOrCreate?: Array<CourseCreateOrConnectWithoutSemestersInput>;

    @Field(() => [CourseUpsertWithWhereUniqueWithoutSemestersInput], {nullable:true})
    @Type(() => CourseUpsertWithWhereUniqueWithoutSemestersInput)
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutSemestersInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    set?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    disconnect?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    delete?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    connect?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseUpdateWithWhereUniqueWithoutSemestersInput], {nullable:true})
    @Type(() => CourseUpdateWithWhereUniqueWithoutSemestersInput)
    update?: Array<CourseUpdateWithWhereUniqueWithoutSemestersInput>;

    @Field(() => [CourseUpdateManyWithWhereWithoutSemestersInput], {nullable:true})
    @Type(() => CourseUpdateManyWithWhereWithoutSemestersInput)
    updateMany?: Array<CourseUpdateManyWithWhereWithoutSemestersInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    @Type(() => CourseScalarWhereInput)
    deleteMany?: Array<CourseScalarWhereInput>;
}
