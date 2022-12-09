import { GenEdType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

await prisma.course.update({
  where: {
    courseNo: "2100111",
  },
  data: {
    genEdType: GenEdType.NO,
  },
});
