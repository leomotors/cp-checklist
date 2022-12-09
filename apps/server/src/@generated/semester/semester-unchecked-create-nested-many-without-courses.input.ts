import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterCreateWithoutCoursesInput } from './semester-create-without-courses.input';
import { Type } from 'class-transformer';
import { SemesterCreateOrConnectWithoutCoursesInput } from './semester-create-or-connect-without-courses.input';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';

@InputType()
export class SemesterUncheckedCreateNestedManyWithoutCoursesInput {

    @Field(() => [SemesterCreateWithoutCoursesInput], {nullable:true})
    @Type(() => SemesterCreateWithoutCoursesInput)
    create?: Array<SemesterCreateWithoutCoursesInput>;

    @Field(() => [SemesterCreateOrConnectWithoutCoursesInput], {nullable:true})
    @Type(() => SemesterCreateOrConnectWithoutCoursesInput)
    connectOrCreate?: Array<SemesterCreateOrConnectWithoutCoursesInput>;

    @Field(() => [SemesterWhereUniqueInput], {nullable:true})
    @Type(() => SemesterWhereUniqueInput)
    connect?: Array<SemesterWhereUniqueInput>;
}
