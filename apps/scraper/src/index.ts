import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const QUERY = `
query Scrap2($filter: FilterInput!, $courseGroup: CourseGroupInput!) {
  search(filter: $filter, courseGroup: $courseGroup) {
    courseNo
    abbrName
    courseNameEn
    courseNameTh
    courseDescEn
    courseDescTh
    academicYear
    courseCondition
    credit
    creditHours
    department
    faculty
    genEdType
    semester
    studyProgram
  }
}`;

for (const matrix of [
  ["2565", "2"],
  ["2565", "1"],
  ["2564", "3"],
  ["2564", "2"],
  ["2564", "1"],
]) {
  const response = await fetch("https://beta.cugetreg.com/_api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QUERY,
      variables: {
        filter: {
          limit: 100000,
          offset: 0,
        },
        courseGroup: {
          studyProgram: "S",
          academicYear: matrix[0],
          semester: matrix[1],
        },
      },
    }),
  }).then((r) => r.json());

  const search = response.data.search as any[];

  console.log(`Found ${search.length} courses for ${matrix[0]} ${matrix[1]}`);

  await prisma.course.createMany({
    data: search,
  });

  console.log("Finished adding to database\n");
}
