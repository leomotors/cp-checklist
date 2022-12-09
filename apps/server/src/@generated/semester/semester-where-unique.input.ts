import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterYearSemesterUserIdCompoundUniqueInput } from './semester-year-semester-user-id-compound-unique.input';

@InputType()
export class SemesterWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => SemesterYearSemesterUserIdCompoundUniqueInput, {nullable:true})
    year_semester_userId?: SemesterYearSemesterUserIdCompoundUniqueInput;
}
