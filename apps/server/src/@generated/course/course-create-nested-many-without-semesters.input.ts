import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutSemestersInput } from './course-create-without-semesters.input';
import { Type } from 'class-transformer';
import { CourseCreateOrConnectWithoutSemestersInput } from './course-create-or-connect-without-semesters.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@InputType()
export class CourseCreateNestedManyWithoutSemestersInput {

    @Field(() => [CourseCreateWithoutSemestersInput], {nullable:true})
    @Type(() => CourseCreateWithoutSemestersInput)
    create?: Array<CourseCreateWithoutSemestersInput>;

    @Field(() => [CourseCreateOrConnectWithoutSemestersInput], {nullable:true})
    @Type(() => CourseCreateOrConnectWithoutSemestersInput)
    connectOrCreate?: Array<CourseCreateOrConnectWithoutSemestersInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    connect?: Array<CourseWhereUniqueInput>;
}
