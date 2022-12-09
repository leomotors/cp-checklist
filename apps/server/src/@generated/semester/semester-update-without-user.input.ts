import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CourseUpdateManyWithoutSemestersNestedInput } from '../course/course-update-many-without-semesters-nested.input';

@InputType()
export class SemesterUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    year?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    semester?: IntFieldUpdateOperationsInput;

    @Field(() => CourseUpdateManyWithoutSemestersNestedInput, {nullable:true})
    courses?: CourseUpdateManyWithoutSemestersNestedInput;
}
