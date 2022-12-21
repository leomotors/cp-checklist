import { GenEdType } from "./mirror";

export type Category = {
  name: string;
  totalCredits: number;
} & (
  | {
      /** Learn all courses in courseIds */
      condition: "all";
      courseIds: string[];
      parameter?: never;
    }
  | {
      /** Learn courses in courseIds until credits satisfies totalCredits */
      condition: "pick";
      courseIds: string[];
      parameter?: never;
    }
  | {
      /** Learn any courses until credits satisfies totalCredits */
      condition: "credits";
      parameter?: never;
    }
  | {
      /** Learn gened courses in parameter until credits satisfies totalCredits */
      condition: "gened";
      parameter: GenEdType;
    }
);

export type TopCategory<TCategory = Category> = {
  name: string;
  totalCredits: number;
} & (
  | {
      categories: TCategory[];
    }
  | TCategory
);

export type ComputedCategory = Category & { satisfied: string[] };

export type Checklist = TopCategory[];
export type ComputedChecklist = TopCategory<ComputedCategory>[];
