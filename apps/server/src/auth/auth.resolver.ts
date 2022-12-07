import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { AuthorizationToken, LoginRegisterArgs } from "./auth.dto";
import { AuthService } from "./auth.service";

@Resolver()
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @Mutation(() => AuthorizationToken)
  login(@Args() args: LoginRegisterArgs) {
    return this.service.login(args);
  }

  @Mutation(() => AuthorizationToken)
  register(@Args() args: LoginRegisterArgs) {
    return this.service.register(args);
  }
}
