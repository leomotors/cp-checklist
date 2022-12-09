import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutSemesterNestedInput } from '../user/user-update-one-required-without-semester-nested.input';
import { CourseUpdateManyWithoutSemestersNestedInput } from '../course/course-update-many-without-semesters-nested.input';

@InputType()
export class SemesterUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    year?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    semester?: IntFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutSemesterNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSemesterNestedInput;

    @Field(() => CourseUpdateManyWithoutSemestersNestedInput, {nullable:true})
    courses?: CourseUpdateManyWithoutSemestersNestedInput;
}
