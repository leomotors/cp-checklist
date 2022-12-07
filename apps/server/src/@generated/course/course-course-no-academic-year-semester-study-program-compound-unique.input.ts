import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CourseCourseNoAcademicYearSemesterStudyProgramCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    courseNo!: string;

    @Field(() => String, {nullable:false})
    academicYear!: string;

    @Field(() => String, {nullable:false})
    semester!: string;

    @Field(() => String, {nullable:false})
    studyProgram!: string;
}
