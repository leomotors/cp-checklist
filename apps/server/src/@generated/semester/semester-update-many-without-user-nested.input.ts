import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterCreateWithoutUserInput } from './semester-create-without-user.input';
import { Type } from 'class-transformer';
import { SemesterCreateOrConnectWithoutUserInput } from './semester-create-or-connect-without-user.input';
import { SemesterUpsertWithWhereUniqueWithoutUserInput } from './semester-upsert-with-where-unique-without-user.input';
import { SemesterCreateManyUserInputEnvelope } from './semester-create-many-user-input-envelope.input';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';
import { SemesterUpdateWithWhereUniqueWithoutUserInput } from './semester-update-with-where-unique-without-user.input';
import { SemesterUpdateManyWithWhereWithoutUserInput } from './semester-update-many-with-where-without-user.input';
import { SemesterScalarWhereInput } from './semester-scalar-where.input';

@InputType()
export class SemesterUpdateManyWithoutUserNestedInput {

    @Field(() => [SemesterCreateWithoutUserInput], {nullable:true})
    @Type(() => SemesterCreateWithoutUserInput)
    create?: Array<SemesterCreateWithoutUserInput>;

    @Field(() => [SemesterCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SemesterCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SemesterCreateOrConnectWithoutUserInput>;

    @Field(() => [SemesterUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SemesterUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SemesterUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SemesterCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SemesterCreateManyUserInputEnvelope)
    createMany?: SemesterCreateManyUserInputEnvelope;

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

    @Field(() => [SemesterUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SemesterUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SemesterUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SemesterUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SemesterUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SemesterUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SemesterScalarWhereInput], {nullable:true})
    @Type(() => SemesterScalarWhereInput)
    deleteMany?: Array<SemesterScalarWhereInput>;
}
