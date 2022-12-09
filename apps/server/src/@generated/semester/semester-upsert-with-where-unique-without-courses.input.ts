import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';
import { Type } from 'class-transformer';
import { SemesterUpdateWithoutCoursesInput } from './semester-update-without-courses.input';
import { SemesterCreateWithoutCoursesInput } from './semester-create-without-courses.input';

@InputType()
export class SemesterUpsertWithWhereUniqueWithoutCoursesInput {

    @Field(() => SemesterWhereUniqueInput, {nullable:false})
    @Type(() => SemesterWhereUniqueInput)
    where!: SemesterWhereUniqueInput;

    @Field(() => SemesterUpdateWithoutCoursesInput, {nullable:false})
    @Type(() => SemesterUpdateWithoutCoursesInput)
    update!: SemesterUpdateWithoutCoursesInput;

    @Field(() => SemesterCreateWithoutCoursesInput, {nullable:false})
    @Type(() => SemesterCreateWithoutCoursesInput)
    create!: SemesterCreateWithoutCoursesInput;
}
