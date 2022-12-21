import { Module } from "@nestjs/common";

import { CourseService } from "src/course/course.service";

import { ChecklistResolver } from "./checklist.resolver";
import { ChecklistService } from "./checklist.service";

@Module({
  providers: [ChecklistService, ChecklistResolver, CourseService],
})
export class ChecklistModule {}
