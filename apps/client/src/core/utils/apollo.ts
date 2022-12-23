import { ApolloError } from "@apollo/client";

export function apolloError(err: unknown) {
  const response = ((err as ApolloError)?.graphQLErrors?.[0].extensions
    .response ?? {}) as Record<string, unknown>;

  return (
    ("message" in response
      ? (response.message as string)
      : (err as ApolloError)?.message) ?? "Unknown error, please check console"
  );
}
