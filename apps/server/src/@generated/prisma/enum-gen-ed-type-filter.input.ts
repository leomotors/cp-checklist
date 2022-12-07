import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenEdType } from './gen-ed-type.enum';
import { NestedEnumGenEdTypeFilter } from './nested-enum-gen-ed-type-filter.input';

@InputType()
export class EnumGenEdTypeFilter {

    @Field(() => GenEdType, {nullable:true})
    equals?: keyof typeof GenEdType;

    @Field(() => [GenEdType], {nullable:true})
    in?: Array<keyof typeof GenEdType>;

    @Field(() => [GenEdType], {nullable:true})
    notIn?: Array<keyof typeof GenEdType>;

    @Field(() => NestedEnumGenEdTypeFilter, {nullable:true})
    not?: NestedEnumGenEdTypeFilter;
}
