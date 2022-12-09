import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RawCourseCourseNoAcademicYearSemesterStudyProgramCompoundUniqueInput } from './raw-course-course-no-academic-year-semester-study-program-compound-unique.input';

@InputType()
export class RawCourseWhereUniqueInput {

    @Field(() => RawCourseCourseNoAcademicYearSemesterStudyProgramCompoundUniqueInput, {nullable:true})
    courseNo_academicYear_semester_studyProgram?: RawCourseCourseNoAcademicYearSemesterStudyProgramCompoundUniqueInput;
}
