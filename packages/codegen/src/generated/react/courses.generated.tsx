import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SearchCoursesQueryVariables = Types.Exact<{
  query: Types.Scalars['String'];
  take: Types.Scalars['Int'];
}>;


export type SearchCoursesQuery = { __typename?: 'Query', searchCourses: Array<{ __typename?: 'PublicCourse', courseNo: string, abbrName: string, courseNameEn: string, courseNameTh: string, courseDescEn?: string | null, courseDescTh?: string | null, credit: number, creditHours: string, genEdType: Types.GenEdType }> };

export type AddCourseMutationVariables = Types.Exact<{
  courseNo: Types.Scalars['String'];
  semesterId: Types.Scalars['String'];
}>;


export type AddCourseMutation = { __typename?: 'Mutation', addCourse: { __typename?: 'Semester', id: string } };

export type RemoveCourseMutationVariables = Types.Exact<{
  courseNo: Types.Scalars['String'];
  semesterId: Types.Scalars['String'];
}>;


export type RemoveCourseMutation = { __typename?: 'Mutation', removeCourse: { __typename?: 'Semester', id: string } };


export const SearchCoursesDocument = gql`
    query SearchCourses($query: String!, $take: Int!) {
  searchCourses(query: $query, take: $take) {
    courseNo
    abbrName
    courseNameEn
    courseNameTh
    courseDescEn
    courseDescTh
    credit
    creditHours
    genEdType
  }
}
    `;

/**
 * __useSearchCoursesQuery__
 *
 * To run a query within a React component, call `useSearchCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCoursesQuery({
 *   variables: {
 *      query: // value for 'query'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useSearchCoursesQuery(baseOptions: Apollo.QueryHookOptions<SearchCoursesQuery, SearchCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCoursesQuery, SearchCoursesQueryVariables>(SearchCoursesDocument, options);
      }
export function useSearchCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCoursesQuery, SearchCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCoursesQuery, SearchCoursesQueryVariables>(SearchCoursesDocument, options);
        }
export type SearchCoursesQueryHookResult = ReturnType<typeof useSearchCoursesQuery>;
export type SearchCoursesLazyQueryHookResult = ReturnType<typeof useSearchCoursesLazyQuery>;
export type SearchCoursesQueryResult = Apollo.QueryResult<SearchCoursesQuery, SearchCoursesQueryVariables>;
export const AddCourseDocument = gql`
    mutation AddCourse($courseNo: String!, $semesterId: String!) {
  addCourse(courseNo: $courseNo, semesterId: $semesterId) {
    id
  }
}
    `;
export type AddCourseMutationFn = Apollo.MutationFunction<AddCourseMutation, AddCourseMutationVariables>;

/**
 * __useAddCourseMutation__
 *
 * To run a mutation, you first call `useAddCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCourseMutation, { data, loading, error }] = useAddCourseMutation({
 *   variables: {
 *      courseNo: // value for 'courseNo'
 *      semesterId: // value for 'semesterId'
 *   },
 * });
 */
export function useAddCourseMutation(baseOptions?: Apollo.MutationHookOptions<AddCourseMutation, AddCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCourseMutation, AddCourseMutationVariables>(AddCourseDocument, options);
      }
export type AddCourseMutationHookResult = ReturnType<typeof useAddCourseMutation>;
export type AddCourseMutationResult = Apollo.MutationResult<AddCourseMutation>;
export type AddCourseMutationOptions = Apollo.BaseMutationOptions<AddCourseMutation, AddCourseMutationVariables>;
export const RemoveCourseDocument = gql`
    mutation RemoveCourse($courseNo: String!, $semesterId: String!) {
  removeCourse(courseNo: $courseNo, semesterId: $semesterId) {
    id
  }
}
    `;
export type RemoveCourseMutationFn = Apollo.MutationFunction<RemoveCourseMutation, RemoveCourseMutationVariables>;

/**
 * __useRemoveCourseMutation__
 *
 * To run a mutation, you first call `useRemoveCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCourseMutation, { data, loading, error }] = useRemoveCourseMutation({
 *   variables: {
 *      courseNo: // value for 'courseNo'
 *      semesterId: // value for 'semesterId'
 *   },
 * });
 */
export function useRemoveCourseMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCourseMutation, RemoveCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCourseMutation, RemoveCourseMutationVariables>(RemoveCourseDocument, options);
      }
export type RemoveCourseMutationHookResult = ReturnType<typeof useRemoveCourseMutation>;
export type RemoveCourseMutationResult = Apollo.MutationResult<RemoveCourseMutation>;
export type RemoveCourseMutationOptions = Apollo.BaseMutationOptions<RemoveCourseMutation, RemoveCourseMutationVariables>;