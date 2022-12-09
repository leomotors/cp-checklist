import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Type } from 'class-transformer';
import { CourseUpdateWithoutSemestersInput } from './course-update-without-semesters.input';
import { CourseCreateWithoutSemestersInput } from './course-create-without-semesters.input';

@InputType()
export class CourseUpsertWithWhereUniqueWithoutSemestersInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutSemestersInput, {nullable:false})
    @Type(() => CourseUpdateWithoutSemestersInput)
    update!: CourseUpdateWithoutSemestersInput;

    @Field(() => CourseCreateWithoutSemestersInput, {nullable:false})
    @Type(() => CourseCreateWithoutSemestersInput)
    create!: CourseCreateWithoutSemestersInput;
}
