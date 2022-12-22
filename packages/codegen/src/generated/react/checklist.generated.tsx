import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ComputeChecklistQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ComputeChecklistQuery = { __typename?: 'Query', computeChecklist: string };


export const ComputeChecklistDocument = gql`
    query ComputeChecklist {
  computeChecklist
}
    `;

/**
 * __useComputeChecklistQuery__
 *
 * To run a query within a React component, call `useComputeChecklistQuery` and pass it any options that fit your needs.
 * When your component renders, `useComputeChecklistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComputeChecklistQuery({
 *   variables: {
 *   },
 * });
 */
export function useComputeChecklistQuery(baseOptions?: Apollo.QueryHookOptions<ComputeChecklistQuery, ComputeChecklistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComputeChecklistQuery, ComputeChecklistQueryVariables>(ComputeChecklistDocument, options);
      }
export function useComputeChecklistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComputeChecklistQuery, ComputeChecklistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComputeChecklistQuery, ComputeChecklistQueryVariables>(ComputeChecklistDocument, options);
        }
export type ComputeChecklistQueryHookResult = ReturnType<typeof useComputeChecklistQuery>;
export type ComputeChecklistLazyQueryHookResult = ReturnType<typeof useComputeChecklistLazyQuery>;
export type ComputeChecklistQueryResult = Apollo.QueryResult<ComputeChecklistQuery, ComputeChecklistQueryVariables>;