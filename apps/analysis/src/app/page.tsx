import { PrismaClient, RawCourse } from "@prisma/client";

import { SaladChecklist } from "@cp-checklist/constants";

import { Cards } from "./Cards";
import { CourseMap, Semester } from "./types";

const coreCourse = SaladChecklist[2];

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const required = coreCourse.categories![2].courseIds!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const approved = coreCourse.categories![3].courseIds!;

const prisma = new PrismaClient();

function getCourseProperties(courses: RawCourse[]) {
  if (courses.length === 0) {
    return {
      semester: Semester.NONE,
      summer: false,
      term: "",
    };
  }

  const hasFirst = courses.some((course) => course.semester === "1");
  const hasSecond = courses.some((course) => course.semester === "2");
  const hasSummer = courses.some((course) => course.semester === "3");

  const latest = courses[courses.length - 1];

  return {
    semester:
      hasFirst && hasSecond
        ? Semester.BOTH
        : hasFirst
        ? Semester.FIRST
        : Semester.SECOND,
    summer: hasSummer,
    term: `${latest.academicYear}%2F${latest.semester}`,
  };
}

async function getData() {
  const courses = await prisma.rawCourse.findMany({
    where: {
      courseNo: {
        in: [...required, ...approved],
      },
    },
    orderBy: [
      {
        academicYear: "asc",
      },
      {
        semester: "asc",
      },
    ],
  });

  const requiredMap = {} as CourseMap;
  const approvedMap = {} as CourseMap;

  for (const require of required) {
    const search = courses.filter((course) => course.courseNo === require);

    const latest = search[search.length - 1];

    const props = getCourseProperties(search);
    requiredMap[require] = {
      ...props,
      courseNameEn: latest?.courseNameEn,
      courseNameTh: latest?.courseNameTh,
      abbrName: latest?.abbrName,
    };
  }

  for (const approve of approved) {
    const search = courses.filter((course) => course.courseNo === approve);

    const latest = search[search.length - 1];

    const props = getCourseProperties(search);
    approvedMap[approve] = {
      ...props,
      courseNameEn: latest?.courseNameEn,
      courseNameTh: latest?.courseNameTh,
      abbrName: latest?.abbrName,
    };
  }

  return {
    required: requiredMap,
    approved: approvedMap,
  };
}

export default async function Home() {
  const { approved, required } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8 p-24">
      <h1 className="text-3xl font-bold">CP Analysis 🥗</h1>

      <p className="text-xl">Last Updated = 2566/1</p>

      <section className="text-lg">
        <p>Red Background = วิชาเปิดล่าสุด &lt; 2564 (ded course)</p>
        <p>Orange Background = วิชาเปิดล่าสุด &lt; 2565 (ไม่มีข้อมูลปี 2566)</p>
        <p>
          Yellow Background = ไม่มีข้อมูลของภาคปลาย 2566
          (มีแค่ภาคต้น/ปีก่อนหน้า)
        </p>
        <p>
          หาย = วิชาอยู่ในรายชื่อวิชาเลือกของหลักสูตร แต่ไม่พบข้อมูล (2564-2566)
        </p>

        <p>
          Source Code at{" "}
          <a href="https://github.com/Leomotors/cp-checklist" target="_blank">
            GitHub
          </a>
        </p>
      </section>

      <Cards
        courses={required}
        title="Required Electives (Pick 2 or 6 Credits)"
      />

      <Cards
        courses={approved}
        title="Approved Electives (Pick 6 or 18 Credits)"
      />
    </main>
  );
}
