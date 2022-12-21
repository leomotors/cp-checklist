export const authorizationLocalStorageKey = "authorization";

export interface IAuthJwt {
  id: string;
  username: string;
  iat: number;
  exp: number;
}

export type Category = {
  name: string;
  courseIds: string[];
} & (
  | {
      condition: "all";
      parameters?: never;
    }
  | {
      condition: "pick" | "credits";
      parameters: number;
    }
);

export type TopCategory = {
  name: string;
} & (
  | {
      categories: Category;
    }
  | Category
);

export type Checklist = TopCategory[];
