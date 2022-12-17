import { Module } from "@nestjs/common";

import { CourseAdapter } from "./course.adapter";
import { CourseResolver } from "./course.resolver";
import { CourseService } from "./course.service";

@Module({
  providers: [CourseAdapter, CourseResolver, CourseService],
})
export class CourseModule {}
