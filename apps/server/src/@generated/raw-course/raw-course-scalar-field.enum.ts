import { registerEnumType } from '@nestjs/graphql';

export enum RawCourseScalarFieldEnum {
    courseNo = "courseNo",
    academicYear = "academicYear",
    semester = "semester",
    studyProgram = "studyProgram",
    abbrName = "abbrName",
    courseNameEn = "courseNameEn",
    courseNameTh = "courseNameTh",
    courseDescEn = "courseDescEn",
    courseDescTh = "courseDescTh",
    courseCondition = "courseCondition",
    credit = "credit",
    creditHours = "creditHours",
    department = "department",
    faculty = "faculty",
    genEdType = "genEdType"
}


registerEnumType(RawCourseScalarFieldEnum, { name: 'RawCourseScalarFieldEnum', description: undefined })
