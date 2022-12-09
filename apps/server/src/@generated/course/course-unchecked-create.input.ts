import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GenEdType } from '../prisma/gen-ed-type.enum';
import { SemesterUncheckedCreateNestedManyWithoutCoursesInput } from '../semester/semester-unchecked-create-nested-many-without-courses.input';

@InputType()
export class CourseUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    courseNo!: string;

    @Field(() => String, {nullable:false})
    abbrName!: string;

    @Field(() => String, {nullable:false})
    courseNameEn!: string;

    @Field(() => String, {nullable:false})
    courseNameTh!: string;

    @Field(() => String, {nullable:true})
    courseDescEn?: string;

    @Field(() => String, {nullable:true})
    courseDescTh?: string;

    @Field(() => String, {nullable:false})
    courseCondition!: string;

    @Field(() => Float, {nullable:false})
    credit!: number;

    @Field(() => String, {nullable:false})
    creditHours!: string;

    @Field(() => String, {nullable:false})
    department!: string;

    @Field(() => String, {nullable:false})
    faculty!: string;

    @Field(() => GenEdType, {nullable:false})
    genEdType!: keyof typeof GenEdType;

    @Field(() => SemesterUncheckedCreateNestedManyWithoutCoursesInput, {nullable:true})
    semesters?: SemesterUncheckedCreateNestedManyWithoutCoursesInput;
}
