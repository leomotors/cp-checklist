import { GenEdType, PrismaClient } from "@prisma/client";

import cliProgress from "cli-progress";

const prisma = new PrismaClient();

const allCourseIds = (
  await prisma.rawCourse.findMany({
    distinct: ["courseNo"],
    select: { courseNo: true },
  })
).map((x) => x.courseNo);

console.log(`Found ${allCourseIds.length} courses`);

const progress = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);

progress.start(allCourseIds.length, 0);

const genEdConflict: string[] = [];

for (const [index, id] of Object.entries(allCourseIds)) {
  const courses = await prisma.rawCourse.findMany({
    where: {
      courseNo: id,
    },
    orderBy: [
      {
        academicYear: "desc",
      },
      {
        semester: "desc",
      },
    ],
  });

  const genEd = [
    ...new Set(courses.map((x) => x.genEdType).filter((x) => x !== "NO")),
  ];

  let genEdType: GenEdType = GenEdType.NO;
  if (genEd.length === 1) {
    genEdType = genEd[0];
  }

  if (genEd.length > 1) {
    genEdConflict.push(id);
    genEdType = genEd[0];
  }

  await prisma.course.create({
    data: {
      courseNo: id,
      abbrName: courses[0].abbrName,
      courseNameEn: courses[0].courseNameEn,
      courseNameTh: courses[0].courseNameTh,
      courseDescEn: courses[0].courseDescEn,
      courseDescTh: courses[0].courseDescTh,
      courseCondition: courses[0].courseCondition,
      credit: courses[0].credit,
      creditHours: courses[0].creditHours,
      department: courses[0].department,
      faculty: courses[0].faculty,
      genEdType,
    },
  });

  progress.update(+index + 1);
}

progress.stop();

// hopefully should never print
if (genEdConflict.length > 0) {
  console.log("GenEd conflict: ");
  console.log(genEdConflict);
}
