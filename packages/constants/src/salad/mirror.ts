// NestJS is commonjs nodejs app, cannot import this from codegen
export enum GenEdType {
  Hu = "HU",
  In = "IN",
  No = "NO",
  Sc = "SC",
  So = "SO",
}

export type PublicCourse = {
  courseNo: string;
  abbrName: string;
  courseNameEn: string;
  courseNameTh: string;
  courseDescEn?: string | null;
  courseDescTh?: string | null;
  courseCondition: string;
  credit: number;
  creditHours: string;
  department: string;
  faculty: string;
  genEdType: GenEdType;
};
