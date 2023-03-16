import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

const PORT = 5111;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
    })
  );
  app.enableCors();

  await app.listen(PORT);
  console.log(
    `Application is running on port ${PORT} (http://localhost:${PORT}/graphql)`
  );
}

bootstrap();
