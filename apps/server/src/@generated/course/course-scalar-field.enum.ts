import { registerEnumType } from '@nestjs/graphql';

export enum CourseScalarFieldEnum {
    courseNo = "courseNo",
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


registerEnumType(CourseScalarFieldEnum, { name: 'CourseScalarFieldEnum', description: undefined })
