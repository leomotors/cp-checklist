export const authorizationLocalStorageKey = "authorization";

export interface IAuthJwt {
  id: string;
  username: string;
  iat: number;
  exp: number;
}
