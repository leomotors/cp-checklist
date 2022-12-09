import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { EnumGenEdTypeFieldUpdateOperationsInput } from '../prisma/enum-gen-ed-type-field-update-operations.input';
import { SemesterUpdateManyWithoutCoursesNestedInput } from '../semester/semester-update-many-without-courses-nested.input';

@InputType()
export class CourseUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    courseNo?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    abbrName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    courseNameEn?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    courseNameTh?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    courseDescEn?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    courseDescTh?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    courseCondition?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    credit?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    creditHours?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    department?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    faculty?: StringFieldUpdateOperationsInput;

    @Field(() => EnumGenEdTypeFieldUpdateOperationsInput, {nullable:true})
    genEdType?: EnumGenEdTypeFieldUpdateOperationsInput;

    @Field(() => SemesterUpdateManyWithoutCoursesNestedInput, {nullable:true})
    semesters?: SemesterUpdateManyWithoutCoursesNestedInput;
}
