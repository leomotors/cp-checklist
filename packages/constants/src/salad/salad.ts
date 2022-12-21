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
    courseIds: [
      "2301107",
      "2301108",
      "2302127",
      "2302163",
      "2304103",
      "2304104",
      "2304183",
      "2304184",
      "2603284",
    ],
  },
  {
    name: "หมวดวิชาเฉพาะ",
    totalCredits: 84,
    categories: [
      {
        name: "กลุ่มวิชาพื้นฐานทางวิศวกรรม",
        totalCredits: 15,
        condition: "all",
        courseIds: [
          "2100301",
          "2110101",
          "2110201",
          "2110203",
          "2110233",
          "2110251",
        ],
      },
      {
        name: "กลุ่มวิชาแกนระดับสาขาวิชา",
        totalCredits: 45,
        condition: "all",
        courseIds: [
          "2110202",
          "2110211",
          "2110215",
          "2110263",
          "2110313",
          "2110316",
          "2110322",
          "2110327",
          "2110335",
          "2110336",
          "2110352",
          "2110356",
          "2110363",
          "2110366",
          "2110471",
          "2110488",
          "2110489",
        ],
      },
      {
        name: "กลุ่มรายวิชาบังคับเลือก",
        totalCredits: 6,
        condition: "pick",
        courseIds: ["2110404", "2110415", "2110446", "2110452", "2110521"],
      },
      {
        name: "กลุ่มรายวิชาเลือก",
        totalCredits: 18,
        condition: "pick",
        courseIds: [
          // วิชาที่เหลือจากวิชาบังคับเลือก
          "2110404",
          "2110415",
          "2110446",
          "2110452",
          "2110521",
          // วิชาเลือก
          "2110291",
          "2110292",
          "2110315",
          "2110391",
          "2110392",
          "2110412",
          "2110413",
          "2110414",
          "2110420",
          "2110421",
          "2110424",
          "2110428",
          "2110429",
          "2110430",
          "2110431",
          "2110432",
          "2110433",
          "2110435",
          "2110441",
          "2110442",
          "2110443",
          "2110451",
          "2110455",
          "2110473",
          "2110475",
          "2110476",
          "2110477",
          "2110478",
          "2110479",
          "2110481",
          "2110490",
          "2110491",
          "2110495",
          "2110496",
          "2110497",
          "2110498",
          "2110499",
          "2100499",
          "2110501",
          "2110511",
          "2110512",
          "2110513",
          "2110522",
          "2110541",
          "2110514",
          "2110524",
          "2110542",
          "2110561",
          "2110562",
          "2110571",
          "2110572",
          "2110573",
          "2110574",
          "2110581",
        ],
      },
    ],
  },
  {
    name: "หมวดวิชาเลือกเสรี",
    totalCredits: 6,
    condition: "credits",
  },
] satisfies Checklist;
