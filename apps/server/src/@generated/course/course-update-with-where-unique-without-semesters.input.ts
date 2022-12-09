import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Type } from 'class-transformer';
import { CourseUpdateWithoutSemestersInput } from './course-update-without-semesters.input';

@InputType()
export class CourseUpdateWithWhereUniqueWithoutSemestersInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutSemestersInput, {nullable:false})
    @Type(() => CourseUpdateWithoutSemestersInput)
    data!: CourseUpdateWithoutSemestersInput;
}
