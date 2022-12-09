import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SemesterCreateWithoutUserInput } from './semester-create-without-user.input';
import { Type } from 'class-transformer';
import { SemesterCreateOrConnectWithoutUserInput } from './semester-create-or-connect-without-user.input';
import { SemesterCreateManyUserInputEnvelope } from './semester-create-many-user-input-envelope.input';
import { SemesterWhereUniqueInput } from './semester-where-unique.input';

@InputType()
export class SemesterCreateNestedManyWithoutUserInput {

    @Field(() => [SemesterCreateWithoutUserInput], {nullable:true})
    @Type(() => SemesterCreateWithoutUserInput)
    create?: Array<SemesterCreateWithoutUserInput>;

    @Field(() => [SemesterCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SemesterCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SemesterCreateOrConnectWithoutUserInput>;

    @Field(() => SemesterCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SemesterCreateManyUserInputEnvelope)
    createMany?: SemesterCreateManyUserInputEnvelope;

    @Field(() => [SemesterWhereUniqueInput], {nullable:true})
    @Type(() => SemesterWhereUniqueInput)
    connect?: Array<SemesterWhereUniqueInput>;
}
