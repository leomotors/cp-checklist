import { GenEdType } from "./mirror";

export type Category = {
  name: string;
  totalCredits: number;
} & (
  | {
      condition: "all";
      courseIds: string[];
      parameter?: never;
    }
  | {
      condition: "pick";
      courseIds: string[];
      parameter: number;
    }
  | {
      condition: "credits";
      parameter?: never;
    }
  | {
      condition: "gened";
      parameter: GenEdType;
    }
);

export type TopCategory = {
  name: string;
  totalCredits: number;
} & (
  | {
      categories: Category[];
    }
  | Category
);

export type Checklist = TopCategory[];
