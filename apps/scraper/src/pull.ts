import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const QUERY = /* GraphQL */ `
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
  }
`;

for (const matrix of [
  ["2567", "3"],
  ["2567", "2"],
  ["2567", "1"],
  ["2566", "3"],
  ["2566", "2"],
  ["2566", "1"],
  ["2565", "3"],
  ["2565", "2"],
  ["2565", "1"],
  ["2564", "3"],
  ["2564", "2"],
  ["2564", "1"],
]) {
  const start = performance.now();

  const response = await fetch("https://cugetreg.com/_api/graphql", {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const search = response.data.search as any[];

  const inter = performance.now();
  console.log(
    `Found ${search.length} courses for ${matrix[0]} ${matrix[1]} in ${
      inter - start
    } ms`
  );

  await prisma.rawCourse.createMany({
    data: search,
  });

  console.log(
    `Finished adding to database in ${performance.now() - inter} ms\n`
  );
}
