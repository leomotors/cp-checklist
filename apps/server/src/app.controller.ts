import { Controller, Get, Redirect } from "@nestjs/common";

import { Permission } from "./auth/auth.decorator";

@Controller()
@Permission("Public")
export class AppController {
  @Get()
  @Redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  get() {
    return;
  }

  @Get("/cunny")
  @Redirect("https://www.youtube.com/watch?v=NOZONW-UK0w&t=26s")
  cunny() {
    return;
  }
}
