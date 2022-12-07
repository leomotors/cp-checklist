import { registerEnumType } from '@nestjs/graphql';

export enum GenEdType {
    SO = "SO",
    HU = "HU",
    SC = "SC",
    IN = "IN",
    NO = "NO"
}


registerEnumType(GenEdType, { name: 'GenEdType', description: undefined })
