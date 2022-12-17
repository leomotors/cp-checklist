import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MySemestersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MySemestersQuery = { __typename?: 'Query', mySemesters: Array<{ __typename?: 'Semester', id: string, year: number, semester: number, totalCredits: number, courses: Array<{ __typename?: 'Course', courseNo: string, abbrName: string, courseNameEn: string, courseNameTh: string, courseDescEn?: string | null, courseDescTh?: string | null, credit: number, genEdType: Types.GenEdType }> }> };


export const MySemestersDocument = gql`
    query MySemesters {
  mySemesters {
    id
    year
    semester
    totalCredits
    courses {
      courseNo
      abbrName
      courseNameEn
      courseNameTh
      courseDescEn
      courseDescTh
      credit
      genEdType
    }
  }
}
    `;

/**
 * __useMySemestersQuery__
 *
 * To run a query within a React component, call `useMySemestersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMySemestersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMySemestersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMySemestersQuery(baseOptions?: Apollo.QueryHookOptions<MySemestersQuery, MySemestersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MySemestersQuery, MySemestersQueryVariables>(MySemestersDocument, options);
      }
export function useMySemestersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MySemestersQuery, MySemestersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MySemestersQuery, MySemestersQueryVariables>(MySemestersDocument, options);
        }
export type MySemestersQueryHookResult = ReturnType<typeof useMySemestersQuery>;
export type MySemestersLazyQueryHookResult = ReturnType<typeof useMySemestersLazyQuery>;
export type MySemestersQueryResult = Apollo.QueryResult<MySemestersQuery, MySemestersQueryVariables>;