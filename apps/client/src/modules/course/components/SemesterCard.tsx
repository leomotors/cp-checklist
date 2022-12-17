import { Semester } from "@cp-checklist/codegen";

export interface SemesterCardProps {
  semester: Pick<
    Semester,
    "courses" | "id" | "semester" | "totalCredits" | "year"
  >;
}

export const SemesterCard = () => {
  return <div></div>;
};
