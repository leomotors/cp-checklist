export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AuthorizationToken = {
  __typename?: 'AuthorizationToken';
  token: Scalars['String'];
};

export type Course = {
  __typename?: 'Course';
  _count: CourseCount;
  abbrName: Scalars['String'];
  courseCondition: Scalars['String'];
  courseDescEn?: Maybe<Scalars['String']>;
  courseDescTh?: Maybe<Scalars['String']>;
  courseNameEn: Scalars['String'];
  courseNameTh: Scalars['String'];
  courseNo: Scalars['ID'];
  credit: Scalars['Float'];
  creditHours: Scalars['String'];
  department: Scalars['String'];
  faculty: Scalars['String'];
  genEdType: GenEdType;
  semesters: Array<Semester>;
};

export type CourseCount = {
  __typename?: 'CourseCount';
  semesters: Scalars['Int'];
};

export type CourseListRelationFilter = {
  every?: InputMaybe<CourseWhereInput>;
  none?: InputMaybe<CourseWhereInput>;
  some?: InputMaybe<CourseWhereInput>;
};

export type CourseOrderByWithRelationInput = {
  abbrName?: InputMaybe<SortOrder>;
  courseCondition?: InputMaybe<SortOrder>;
  courseDescEn?: InputMaybe<SortOrder>;
  courseDescTh?: InputMaybe<SortOrder>;
  courseNameEn?: InputMaybe<SortOrder>;
  courseNameTh?: InputMaybe<SortOrder>;
  courseNo?: InputMaybe<SortOrder>;
  credit?: InputMaybe<SortOrder>;
  creditHours?: InputMaybe<SortOrder>;
  department?: InputMaybe<SortOrder>;
  faculty?: InputMaybe<SortOrder>;
  genEdType?: InputMaybe<SortOrder>;
  semesters?: InputMaybe<SemesterOrderByRelationAggregateInput>;
};

export enum CourseScalarFieldEnum {
  AbbrName = 'abbrName',
  CourseCondition = 'courseCondition',
  CourseDescEn = 'courseDescEn',
  CourseDescTh = 'courseDescTh',
  CourseNameEn = 'courseNameEn',
  CourseNameTh = 'courseNameTh',
  CourseNo = 'courseNo',
  Credit = 'credit',
  CreditHours = 'creditHours',
  Department = 'department',
  Faculty = 'faculty',
  GenEdType = 'genEdType'
}

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>;
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  OR?: InputMaybe<Array<CourseWhereInput>>;
  abbrName?: InputMaybe<StringFilter>;
  courseCondition?: InputMaybe<StringFilter>;
  courseDescEn?: InputMaybe<StringNullableFilter>;
  courseDescTh?: InputMaybe<StringNullableFilter>;
  courseNameEn?: InputMaybe<StringFilter>;
  courseNameTh?: InputMaybe<StringFilter>;
  courseNo?: InputMaybe<StringFilter>;
  credit?: InputMaybe<FloatFilter>;
  creditHours?: InputMaybe<StringFilter>;
  department?: InputMaybe<StringFilter>;
  faculty?: InputMaybe<StringFilter>;
  genEdType?: InputMaybe<EnumGenEdTypeFilter>;
  semesters?: InputMaybe<SemesterListRelationFilter>;
};

export type CourseWhereUniqueInput = {
  courseNo?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumGenEdTypeFilter = {
  equals?: InputMaybe<GenEdType>;
  in?: InputMaybe<Array<GenEdType>>;
  not?: InputMaybe<NestedEnumGenEdTypeFilter>;
  notIn?: InputMaybe<Array<GenEdType>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export enum GenEdType {
  Hu = 'HU',
  In = 'IN',
  No = 'NO',
  Sc = 'SC',
  So = 'SO'
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCourse: Semester;
  createSemester: Semester;
  login: AuthorizationToken;
  register: AuthorizationToken;
  removeCourse: Semester;
};


export type MutationAddCourseArgs = {
  courseNo: Scalars['String'];
  semesterId: Scalars['String'];
};


export type MutationCreateSemesterArgs = {
  semester: Scalars['Int'];
  year: Scalars['Int'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRemoveCourseArgs = {
  courseNo: Scalars['String'];
  semesterId: Scalars['String'];
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumGenEdTypeFilter = {
  equals?: InputMaybe<GenEdType>;
  in?: InputMaybe<Array<GenEdType>>;
  not?: InputMaybe<NestedEnumGenEdTypeFilter>;
  notIn?: InputMaybe<Array<GenEdType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  courses: Array<Course>;
  me: User;
  mySemesters: Array<Semester>;
  users: Array<User>;
};


export type QueryCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Semester = {
  __typename?: 'Semester';
  _count: SemesterCount;
  courses: Array<Course>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  semester: Scalars['Int'];
  totalCredits: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  year: Scalars['Int'];
};

export type SemesterCount = {
  __typename?: 'SemesterCount';
  courses: Scalars['Int'];
};

export type SemesterListRelationFilter = {
  every?: InputMaybe<SemesterWhereInput>;
  none?: InputMaybe<SemesterWhereInput>;
  some?: InputMaybe<SemesterWhereInput>;
};

export type SemesterOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SemesterWhereInput = {
  AND?: InputMaybe<Array<SemesterWhereInput>>;
  NOT?: InputMaybe<Array<SemesterWhereInput>>;
  OR?: InputMaybe<Array<SemesterWhereInput>>;
  courses?: InputMaybe<CourseListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  semester?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  year?: InputMaybe<IntFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  password: Scalars['String'];
  semesters: Array<Semester>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserCount = {
  __typename?: 'UserCount';
  semesters: Scalars['Int'];
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  semesters?: InputMaybe<SemesterOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Password = 'password',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  semesters?: InputMaybe<SemesterListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};
