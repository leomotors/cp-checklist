import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCourseNoAcademicYearSemesterStudyProgramCompoundUniqueInput } from './course-course-no-academic-year-semester-study-program-compound-unique.input';

@InputType()
export class CourseWhereUniqueInput {

    @Field(() => CourseCourseNoAcademicYearSemesterStudyProgramCompoundUniqueInput, {nullable:true})
    courseNo_academicYear_semester_studyProgram?: CourseCourseNoAcademicYearSemesterStudyProgramCompoundUniqueInput;
}
