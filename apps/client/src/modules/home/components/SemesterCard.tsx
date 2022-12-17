import { Semester } from "@cp-checklist/codegen";
import { ComponentProps, FC } from "react";
import { CourseCard } from "./CourseCard";

export interface SemesterCardProps {
  semester: Pick<Semester, "id" | "semester" | "totalCredits" | "year"> & {
    courses: ComponentProps<typeof CourseCard>["course"][];
  };
}

const semesterMap = {
  1: "ภาคต้น",
  2: "ภาคปลาย",
  3: "ภาคฤดูร้อน",
};

function getSemester(sem: number) {
  return semesterMap[sem as keyof typeof semesterMap] ?? "ภาคอะไรวะ";
}

export const SemesterCard: FC<SemesterCardProps> = ({ semester }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-green-200 p-4">
      <div className="flex justify-between text-2xl font-bold">
        <p>
          Year {semester.year} {getSemester(semester.semester)}
        </p>

        <p>{semester.totalCredits} หน่วยกิต</p>
      </div>

      <div className="flex flex-col gap-2">
        {semester.courses?.map((course) => (
          <CourseCard key={course.courseNo} course={course} />
        ))}
      </div>
    </div>
  );
};
