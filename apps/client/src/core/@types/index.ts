import { FC, PropsWithChildren } from "react";

import { NextPage } from "next";

export type MyPage<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  /**
   * **private** - Only authorized user can view
   *
   * **public** - Everyone can view
   *
   * **redirect** - Authorized user will be redirected to home page
   *
   * @default "private"
   */
  authStatus?: "private" | "public" | "redirect";
  Layout?: FC<PropsWithChildren>;
};
