import { FC } from "react";

import clsx from "clsx";

import { CardBorder } from "./CardBorder";
import { CourseMap, Semester } from "./types";

type CardsProps = {
  title: string;
  storageKey: string;
  courses: CourseMap;
  isGenEd?: boolean;
};

export const Cards: FC<CardsProps> = ({
  courses,
  isGenEd,
  storageKey,
  title,
}) => {
  const groups = Object.entries(courses).reduce<
    Record<Semester | "summer", (CourseMap[string] & { courseNo: string })[]>
  >(
    (acc, [courseNo, course]) => {
      acc[course.semester].push({ ...course, courseNo });

      if (course.summer) {
        acc.summer.push({ ...course, courseNo });
      }

      return acc;
    },
    {
      [Semester.FIRST]: [],
      [Semester.SECOND]: [],
      [Semester.BOTH]: [],
      [Semester.NONE]: [],
      summer: [],
    }
  );

  const groupTitle = [
    "ภาคต้นเท่านั้น",
    "ภาคปลายเท่านั้น",
    "ทั้งภาคต้นและภาคปลาย",
    "หาย",
    "มีภาคฤดูร้อน",
  ];

  return (
    <section className="flex w-full flex-col gap-4 rounded-lg bg-pink-200 p-8">
      <CardBorder
        storageKey={storageKey}
        title={<h1 className="text-3xl font-bold">{title}</h1>}
      >
        <div className="flex gap-2">
          {Object.entries(groups).map(
            ([semester, courses], index) =>
              (isGenEd && semester === "3") || (
                <div
                  key={semester}
                  className={clsx(
                    "flex flex-col gap-4 rounded-lg p-4",
                    semester === "summer" ? "bg-red-300" : "bg-pink-300",
                    isGenEd ? "w-1/4" : "w-1/5"
                  )}
                >
                  <h2 className="text-2xl font-bold">{groupTitle[index]}</h2>

                  {courses.map((course) => {
                    const lastYear = +course.term.split("%2F")[0];

                    let bgColor = "";

                    if (isNaN(lastYear) || lastYear <= 2564) {
                      bgColor = "bg-red-500";
                    } else if (lastYear <= 2565) {
                      bgColor = "bg-orange-400";
                    } else if (
                      [Semester.BOTH, Semester.SECOND].includes(+semester) &&
                      !course.term.endsWith("2")
                    ) {
                      bgColor = "bg-yellow-400";
                    }

                    return (
                      <a
                        key={course.courseNo}
                        className={clsx(
                          "rounded-xl border border-pink-50 p-2 transition-colors hover:bg-pink-400",
                          bgColor
                        )}
                        href={`https://cugetreg.com/S/courses/${course.courseNo}?term=${course.term}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <p className="text-xl font-bold">{course.courseNo}</p>
                        <p className="text-xl font-bold">{course.abbrName}</p>
                        <p>{course.courseNameEn}</p>
                        <p>{course.courseNameTh}</p>
                      </a>
                    );
                  })}
                </div>
              )
          )}
        </div>
      </CardBorder>
    </section>
  );
};
