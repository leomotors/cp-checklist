import { registerEnumType } from '@nestjs/graphql';

export enum SemesterScalarFieldEnum {
    id = "id",
    year = "year",
    semester = "semester",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SemesterScalarFieldEnum, { name: 'SemesterScalarFieldEnum', description: undefined })
