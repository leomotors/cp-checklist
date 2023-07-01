import { RawCourse } from "@prisma/client";

export enum Semester {
  FIRST,
  SECOND,
  BOTH,
  NONE,
}

export type CourseMap = Record<
  string,
  { semester: Semester; summer: boolean; term: string } & Pick<
    RawCourse,
    "courseNameEn" | "courseNameTh" | "abbrName"
  >
>;
