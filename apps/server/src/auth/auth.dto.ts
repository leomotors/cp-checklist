import { ArgsType, Field, ObjectType } from "@nestjs/graphql";

@ArgsType()
export class LoginRegisterArgs {
  @Field()
  username!: string;

  @Field()
  password!: string;
}

@ObjectType()
export class AuthorizationToken {
  @Field()
  token!: string;
}
