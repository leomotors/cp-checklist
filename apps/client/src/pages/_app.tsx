import type { AppProps } from "next/app";
import Head from "next/head";

import { ApolloProvider } from "@apollo/client";

import { createApolloClient } from "@cp-checklist/codegen";

import { Renderer } from "$core/layouts";
import { AuthProvider } from "$modules/authentication";
import "$styles/global.scss";

const client = createApolloClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CP Checklist</title>
        <meta
          content="Check if you are ready to graduate of CU CP 🥗"
          name="description"
        />
      </Head>

      <ApolloProvider client={client}>
        <AuthProvider>
          <Renderer page={Component} props={pageProps} />
        </AuthProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
