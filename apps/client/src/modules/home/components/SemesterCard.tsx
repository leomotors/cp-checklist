import { ComponentProps, FC, useMemo } from "react";
import { Plus } from "react-bootstrap-icons";

import clsx from "clsx";

import { Semester, useRemoveCourseMutation } from "@cp-checklist/codegen";
import { Button } from "@cp-checklist/design";

import { CourseCard } from "./CourseCard";

export interface SemesterCardProps {
  semester: Pick<Semester, "id" | "semester" | "totalCredits" | "year"> & {
    courses: ComponentProps<typeof CourseCard>["course"][];
  };
  onAddCourse: (id: string) => unknown;
  onMutate: () => unknown;
}

const semesterMap = {
  1: "ภาคต้น",
  2: "ภาคปลาย",
  3: "ภาคฤดูร้อน",
};

function getSemester(sem: number) {
  return semesterMap[sem as keyof typeof semesterMap] ?? "ภาคอะไรวะ";
}

function tooManyCredits(credits: number, sem: number) {
  if (credits > 7 && sem === 3) return true;
  if (credits > 22) return true;

  return false;
}

export const SemesterCard: FC<SemesterCardProps> = ({
  onAddCourse,
  onMutate,
  semester,
}) => {
  const [removeCourse] = useRemoveCourseMutation();

  const creditsClsx = useMemo(
    () =>
      clsx(
        tooManyCredits(semester.totalCredits, semester.semester) &&
          "text-red-500"
      ),
    [semester.semester, semester.totalCredits]
  );

  async function handleRemove(courseNo: string) {
    await removeCourse({
      variables: {
        courseNo,
        semesterId: semester.id,
      },
    });

    // TODO Delete Confirmation

    onMutate();
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-green-200 p-4">
      <div className="flex justify-between text-2xl font-bold">
        <p>
          Year {semester.year} {getSemester(semester.semester)}
        </p>

        <div className="flex items-center gap-2">
          <p className={creditsClsx}>{semester.totalCredits} หน่วยกิต</p>
          <Button
            size="xs"
            variant="outline"
            onClick={() => onAddCourse(semester.id)}
          >
            <Plus size={24} />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {semester.courses?.map((course) => (
          <CourseCard
            key={course.courseNo}
            course={course}
            onRemove={() => handleRemove(course.courseNo)}
          />
        ))}
      </div>
    </div>
  );
};
