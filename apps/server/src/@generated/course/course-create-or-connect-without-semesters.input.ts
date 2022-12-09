import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Type } from 'class-transformer';
import { CourseCreateWithoutSemestersInput } from './course-create-without-semesters.input';

@InputType()
export class CourseCreateOrConnectWithoutSemestersInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateWithoutSemestersInput, {nullable:false})
    @Type(() => CourseCreateWithoutSemestersInput)
    create!: CourseCreateWithoutSemestersInput;
}
