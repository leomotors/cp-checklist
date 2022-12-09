import { registerEnumType } from '@nestjs/graphql';

export enum SemesterScalarFieldEnum {
    id = "id",
    year = "year",
    semester = "semester",
    userId = "userId"
}


registerEnumType(SemesterScalarFieldEnum, { name: 'SemesterScalarFieldEnum', description: undefined })
