import { Resolver } from "@nestjs/graphql";

import { ChecklistService } from "./checklist.service";

@Resolver()
export class ChecklistResolver {
  constructor(private readonly service: ChecklistService) {}
}
