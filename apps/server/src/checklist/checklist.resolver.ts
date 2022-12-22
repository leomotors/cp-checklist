import { Query, Resolver } from "@nestjs/graphql";

import { User } from "@generated/user/user.model";

import { Permission } from "src/auth/auth.decorator";
import { UserContext } from "src/user/user.decorator";

import { ChecklistService } from "./checklist.service";

@Resolver()
export class ChecklistResolver {
  constructor(private readonly service: ChecklistService) {}

  @Query(() => String)
  @Permission("User")
  computeChecklist(@UserContext() user: User) {
    return this.service.computeChecklist(user);
  }
}
