import { FC, Fragment, useEffect, useMemo } from "react";

import { useRouter } from "next/router";

import { MyPage } from "$core/@types";

import { useUser } from "./hooks";

interface RendererProps {
  page: MyPage;
  props: Record<string, unknown>;
}

export const Renderer: FC<RendererProps> = ({ page: Page, props }) => {
  const router = useRouter();
  const { id, username } = useUser();

  const isAuth = !!(id && username);

  useEffect(() => {
    if (Page.authStatus === "redirect" && isAuth) {
      router.replace("/home");
    } else if (Page.authStatus !== "public" && !isAuth) {
      router.replace("/");
    }
  }, [isAuth, Page.authStatus, router]);

  const Layout = useMemo(() => Page.Layout || Fragment, [Page.Layout]);

  switch (Page.authStatus) {
    case "private": {
      if (isAuth)
        return (
          <Layout>
            <Page props={props} />
          </Layout>
        );

      return null;
    }

    case "redirect": {
      if (!isAuth)
        return (
          <Layout>
            <Page props={props} />
          </Layout>
        );

      return null;
    }

    default:
      return (
        <Layout>
          <Page props={props} />
        </Layout>
      );
  }
};
