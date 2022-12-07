import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenEdType } from './gen-ed-type.enum';
import { NestedEnumGenEdTypeWithAggregatesFilter } from './nested-enum-gen-ed-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGenEdTypeFilter } from './nested-enum-gen-ed-type-filter.input';

@InputType()
export class EnumGenEdTypeWithAggregatesFilter {

    @Field(() => GenEdType, {nullable:true})
    equals?: keyof typeof GenEdType;

    @Field(() => [GenEdType], {nullable:true})
    in?: Array<keyof typeof GenEdType>;

    @Field(() => [GenEdType], {nullable:true})
    notIn?: Array<keyof typeof GenEdType>;

    @Field(() => NestedEnumGenEdTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGenEdTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGenEdTypeFilter, {nullable:true})
    _min?: NestedEnumGenEdTypeFilter;

    @Field(() => NestedEnumGenEdTypeFilter, {nullable:true})
    _max?: NestedEnumGenEdTypeFilter;
}
