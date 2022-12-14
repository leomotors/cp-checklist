import { ArgsType, Field, ObjectType } from "@nestjs/graphql";

import { Length, Matches } from "class-validator";

@ArgsType()
export class LoginRegisterArgs {
  @Field()
  @Matches(/^[a-z0-9_]{3,16}$/, {
    message:
      "Username must be 3-16 characters long and contain only lowercase letters, numbers, and underscores.",
  })
  username!: string;

  @Field()
  @Length(6, 1000, {
    message:
      "Password length must be at least 6 characters (and not more than 1000)",
  })
  password!: string;
}

@ObjectType()
export class AuthorizationToken {
  @Field()
  token!: string;
}
