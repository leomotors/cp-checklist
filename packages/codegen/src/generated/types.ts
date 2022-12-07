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

export type Course = {
  __typename?: 'Course';
  abbrName: Scalars['String'];
  academicYear: Scalars['String'];
  courseCondition: Scalars['String'];
  courseDescEn?: Maybe<Scalars['String']>;
  courseDescTh?: Maybe<Scalars['String']>;
  courseNameEn: Scalars['String'];
  courseNameTh: Scalars['String'];
  courseNo: Scalars['String'];
  credit: Scalars['Float'];
  creditHours: Scalars['String'];
  department: Scalars['String'];
  faculty: Scalars['String'];
  genEdType: GenEdType;
  semester: Scalars['String'];
  studyProgram: Scalars['String'];
};

export type CourseCourseNoAcademicYearSemesterStudyProgramCompoundUniqueInput = {
  academicYear: Scalars['String'];
  courseNo: Scalars['String'];
  semester: Scalars['String'];
  studyProgram: Scalars['String'];
};

export type CourseOrderByWithRelationInput = {
  abbrName?: InputMaybe<SortOrder>;
  academicYear?: InputMaybe<SortOrder>;
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
  semester?: InputMaybe<SortOrder>;
  studyProgram?: InputMaybe<SortOrder>;
};

export enum CourseScalarFieldEnum {
  AbbrName = 'abbrName',
  AcademicYear = 'academicYear',
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
  GenEdType = 'genEdType',
  Semester = 'semester',
  StudyProgram = 'studyProgram'
}

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>;
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  OR?: InputMaybe<Array<CourseWhereInput>>;
  abbrName?: InputMaybe<StringFilter>;
  academicYear?: InputMaybe<StringFilter>;
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
  semester?: InputMaybe<StringFilter>;
  studyProgram?: InputMaybe<StringFilter>;
};

export type CourseWhereUniqueInput = {
  courseNo_academicYear_semester_studyProgram?: InputMaybe<CourseCourseNoAcademicYearSemesterStudyProgramCompoundUniqueInput>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
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
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};
