import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';
import { Type } from 'class-transformer';
import { SemesterCreateWithoutCoursesInput } from './semester-create-without-courses.input';

@InputType()
export class SemesterCreateOrConnectWithoutCoursesInput {

    @Field(() => SemesterWhereUniqueInput, {nullable:false})
    @Type(() => SemesterWhereUniqueInput)
    where!: SemesterWhereUniqueInput;

    @Field(() => SemesterCreateWithoutCoursesInput, {nullable:false})
    @Type(() => SemesterCreateWithoutCoursesInput)
    create!: SemesterCreateWithoutCoursesInput;
}
