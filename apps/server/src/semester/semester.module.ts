import { Module } from "@nestjs/common";

import { SemesterResolver } from "./semester.resolver";
import { SemesterService } from "./semester.service";

@Module({
  providers: [SemesterResolver, SemesterService],
})
export class SemesterModule {}
