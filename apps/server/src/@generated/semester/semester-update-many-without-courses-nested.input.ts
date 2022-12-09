import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterCreateWithoutCoursesInput } from './semester-create-without-courses.input';
import { Type } from 'class-transformer';
import { SemesterCreateOrConnectWithoutCoursesInput } from './semester-create-or-connect-without-courses.input';
import { SemesterUpsertWithWhereUniqueWithoutCoursesInput } from './semester-upsert-with-where-unique-without-courses.input';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';
import { SemesterUpdateWithWhereUniqueWithoutCoursesInput } from './semester-update-with-where-unique-without-courses.input';
import { SemesterUpdateManyWithWhereWithoutCoursesInput } from './semester-update-many-with-where-without-courses.input';
import { SemesterScalarWhereInput } from './semester-scalar-where.input';

@InputType()
export class SemesterUpdateManyWithoutCoursesNestedInput {

    @Field(() => [SemesterCreateWithoutCoursesInput], {nullable:true})
    @Type(() => SemesterCreateWithoutCoursesInput)
    create?: Array<SemesterCreateWithoutCoursesInput>;

    @Field(() => [SemesterCreateOrConnectWithoutCoursesInput], {nullable:true})
    @Type(() => SemesterCreateOrConnectWithoutCoursesInput)
    connectOrCreate?: Array<SemesterCreateOrConnectWithoutCoursesInput>;

    @Field(() => [SemesterUpsertWithWhereUniqueWithoutCoursesInput], {nullable:true})
    @Type(() => SemesterUpsertWithWhereUniqueWithoutCoursesInput)
    upsert?: Array<SemesterUpsertWithWhereUniqueWithoutCoursesInput>;

    @Field(() => [SemesterWhereUniqueInput], {nullable:true})
    @Type(() => SemesterWhereUniqueInput)
    set?: Array<SemesterWhereUniqueInput>;

    @Field(() => [SemesterWhereUniqueInput], {nullable:true})
    @Type(() => SemesterWhereUniqueInput)
    disconnect?: Array<SemesterWhereUniqueInput>;

    @Field(() => [SemesterWhereUniqueInput], {nullable:true})
    @Type(() => SemesterWhereUniqueInput)
    delete?: Array<SemesterWhereUniqueInput>;

    @Field(() => [SemesterWhereUniqueInput], {nullable:true})
    @Type(() => SemesterWhereUniqueInput)
    connect?: Array<SemesterWhereUniqueInput>;

    @Field(() => [SemesterUpdateWithWhereUniqueWithoutCoursesInput], {nullable:true})
    @Type(() => SemesterUpdateWithWhereUniqueWithoutCoursesInput)
    update?: Array<SemesterUpdateWithWhereUniqueWithoutCoursesInput>;

    @Field(() => [SemesterUpdateManyWithWhereWithoutCoursesInput], {nullable:true})
    @Type(() => SemesterUpdateManyWithWhereWithoutCoursesInput)
    updateMany?: Array<SemesterUpdateManyWithWhereWithoutCoursesInput>;

    @Field(() => [SemesterScalarWhereInput], {nullable:true})
    @Type(() => SemesterScalarWhereInput)
    deleteMany?: Array<SemesterScalarWhereInput>;
}
