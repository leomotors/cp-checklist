import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SemesterWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
