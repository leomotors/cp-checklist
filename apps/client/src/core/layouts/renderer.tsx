import { FC, Fragment, useEffect, useMemo } from "react";

import { useRouter } from "next/router";

import { MyPage } from "$core/@types";
import { useUser } from "$modules/authentication";

import { HomeLayout } from "./HomeLayout";

interface RendererProps {
  page: MyPage;
  props: Record<string, unknown>;
}

export const Layouts = {
  Home: HomeLayout,
};

export const Renderer: FC<RendererProps> = ({ page: Page, props }) => {
  const router = useRouter();
  const { id, loading, username } = useUser();

  const isAuth = !!(id && username);

  useEffect(() => {
    if (Page.authStatus === "redirect" && isAuth && !loading) {
      router.replace("/home");
    } else if (
      (!Page.authStatus || Page.authStatus === "private") &&
      !isAuth &&
      !loading
    ) {
      router.replace("/");
    }
  }, [isAuth, Page.authStatus, router, loading]);

  const Layout = useMemo(
    () => (Page.layout ? Layouts[Page.layout] : Fragment),
    [Page.layout]
  );

  switch (Page.authStatus) {
    case "public": {
      return (
        <Layout>
          <Page props={props} />
        </Layout>
      );
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

    default: {
      if (isAuth)
        return (
          <Layout>
            <Page props={props} />
          </Layout>
        );

      return null;
    }
  }
};
