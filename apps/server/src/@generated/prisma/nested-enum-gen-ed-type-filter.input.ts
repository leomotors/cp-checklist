import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenEdType } from './gen-ed-type.enum';

@InputType()
export class NestedEnumGenEdTypeFilter {

    @Field(() => GenEdType, {nullable:true})
    equals?: keyof typeof GenEdType;

    @Field(() => [GenEdType], {nullable:true})
    in?: Array<keyof typeof GenEdType>;

    @Field(() => [GenEdType], {nullable:true})
    notIn?: Array<keyof typeof GenEdType>;

    @Field(() => NestedEnumGenEdTypeFilter, {nullable:true})
    not?: NestedEnumGenEdTypeFilter;
}
