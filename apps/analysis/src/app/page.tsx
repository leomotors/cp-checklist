import { GenEdType, PrismaClient, RawCourse } from "@prisma/client";

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
        : hasSecond 
        ? Semester.SECOND
        : Semester.NONE,
    summer: hasSummer,
    term: `${latest.academicYear}%2F${latest.semester}`,
  };
}

function buildMap(courseIds: string[], courses: RawCourse[]) {
  const builtMap = {} as CourseMap;

  for (const courseId of courseIds) {
    const search = courses.filter((course) => course.courseNo === courseId);

    const latest = search[search.length - 1];

    const props = getCourseProperties(search);
    builtMap[courseId] = {
      ...props,
      courseNameEn: latest?.courseNameEn,
      courseNameTh: latest?.courseNameTh,
      abbrName: latest?.abbrName,
    };
  }

  return builtMap;
}

function unique<T>(arr: T[]) {
  return [...new Set(arr)];
}

async function getData() {
  const courses = await prisma.rawCourse.findMany({
    where: {
      courseNo: {
        startsWith: "2110",
      },
      academicYear: {
        gt: "2566",
      }
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

  const realApprove = unique([
    ...approved,
    ...courses.map((course) => course.courseNo).filter(courseNo => courseNo.startsWith("21104") || courseNo.startsWith("21105"))
  ])

  const requiredMap = buildMap(required, courses);
  const approvedMap = buildMap(realApprove, courses);

  const genEds = await prisma.rawCourse.findMany({
    where: {
      genEdType: {
        not: GenEdType.NO,
      },
      academicYear: {
        gt: "2566"
      }
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

  const genEdSc = buildMap(
    unique(genEds.filter((genEd) => genEd.genEdType === GenEdType.SC))
      .map((genEd) => genEd.courseNo)
      .filter((id) => id !== "2100111" && !id.startsWith("2110")),
    genEds
  );

  const genEdSo = buildMap(
    unique(genEds.filter((genEd) => genEd.genEdType === GenEdType.SO)).map(
      (genEd) => genEd.courseNo
    ),
    genEds
  );

  const genEdHu = buildMap(
    unique(genEds.filter((genEd) => genEd.genEdType === GenEdType.HU)).map(
      (genEd) => genEd.courseNo
    ),
    genEds
  );

  const genEdIn = buildMap(
    unique(genEds.filter((genEd) => genEd.genEdType === GenEdType.IN)).map(
      (genEd) => genEd.courseNo
    ),
    genEds
  );

  return {
    required: requiredMap,
    approved: approvedMap,
    genEdSc,
    genEdSo,
    genEdHu,
    genEdIn,
  };
}

export default async function Home() {
  const { approved, genEdHu, genEdIn, genEdSc, genEdSo, required } =
    await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8 p-4 xl:p-24">
      <h1 className="text-3xl font-bold">CP Analysis 🥗</h1>

      <p className="text-xl">Last Updated = 2567/1 (๒๙ มิถุนายน ๒๕๖๗)</p>

      <section className="text-lg">
        <p>
          ยึดข้อมูลของปี 66-67
        </p>
        <p>
          บางวิชาเปิดแต่อาจลงไม่ได้ เช่น SW DEV PRAC II เทอมปลาย ลงได้เฉพาะ CEDT
        </p>
        <p>
          หาย = วิชาอยู่ในรายชื่อวิชาเลือกของหลักสูตร แต่ไม่พบข้อมูล (2566-2567)
        </p>
        <p>
          วิชาเลือกในเว็บนี้ = รายชื่อวิชาในหน้าหลักสูตร 61 (ข้อมูลเก่ามาก) + ทุกวิชาที่เป็น 21104xx 21105xx (เพราะหน้าเว็บข้อมูลไม่ครบ) บางตัวเป็นวิชาบังคับอยู่แล้ว บางตัวเฉพาะ ป.โท หรือ CEDT
        </p>

        <p>
          Source Code at{" "}
          <a href="https://github.com/leomotors/cp-checklist" target="_blank">
            GitHub
          </a>
        </p>
      </section>

      <Cards
        courses={required}
        storageKey="required"
        title="Required Electives (Pick 2 or 6 Credits)"
      />

      <Cards
        courses={approved}
        storageKey="approved"
        title="Approved Electives (Pick 6 or 18 Credits)"
      />

      <Cards courses={genEdSc} isGenEd storageKey="sc" title="GenEd (วิทย์)" />
      <Cards courses={genEdSo} isGenEd storageKey="so" title="GenEd (สังคม)" />
      <Cards courses={genEdHu} isGenEd storageKey="hu" title="GenEd (มนุษย์)" />
      <Cards courses={genEdIn} isGenEd storageKey="in" title="GenEd (สหฯ)" />
    </main>
  );
}
