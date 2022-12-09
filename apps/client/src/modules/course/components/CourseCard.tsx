import { FC } from "react";

import { Course } from "@cp-checklist/codegen";

interface CourseCardProps {
  course: Course;
}

export const CourseCard: FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="flex gap-2">
      <div className="h-full w-2 bg-red-500" />
      <div>
        <p>
          {course.courseNo} {course.abbrName}
        </p>
        <p>{course.courseNameEn}</p>
        <p>{course.courseNameTh}</p>
      </div>
    </div>
  );
};
