import { GenEdType } from "./mirror";
import { Checklist } from "./types";

export const SaladChecklist = [
  {
    name: "หมวดวิชาศึกษาทั่วไป",
    totalCredits: 30,
    categories: [
      {
        name: "กลุ่มวิชาสังคมศาสตร์",
        totalCredits: 3,
        condition: "gened",
        parameter: GenEdType.So,
      },
      {
        name: "กลุ่มวิชามนุษยศาสตร์",
        totalCredits: 3,
        condition: "gened",
        parameter: GenEdType.Hu,
      },
      {
        name: "กลุ่มวิชาสหศาสตร์",
        totalCredits: 3,
        condition: "gened",
        parameter: GenEdType.In,
      },
      {
        name: "กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์",
        totalCredits: 3,
        condition: "gened",
        parameter: GenEdType.Sc,
      },
      {
        name: "กลุ่มวิชาศึกษาทั่วไปกลุ่มพิเศษ",
        totalCredits: 6,
        condition: "all",
        courseIds: ["2100111", "2110221"],
      },
      {
        name: "กลุ่มวิชาภาษาต่างประเทศ",
        totalCredits: 12,
        condition: "all",
        courseIds: ["5500111", "5500112", "5500208", "5500308"],
      },
    ],
  },
  {
    name: "หมวดวิชาพื้นฐานทางวิทยาศาสตร์และคณิตศาสตร์",
    totalCredits: 21,
    condition: "all",
    courseIds: ["2301107", "2301108"],
  },
] satisfies Checklist;
