import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenEdType } from './gen-ed-type.enum';

@InputType()
export class EnumGenEdTypeFieldUpdateOperationsInput {

    @Field(() => GenEdType, {nullable:true})
    set?: keyof typeof GenEdType;
}
