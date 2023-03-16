import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";

import { PrismaService } from "./prisma.service";

import { AppController } from "./app.controller";

import { AuthModule } from "./auth/auth.module";
import { ChecklistModule } from "./checklist/checklist.module";
import { CourseModule } from "./course/course.module";
import { SemesterModule } from "./semester/semester.module";
import { UserModule } from "./user/user.module";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "../../.env",
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
      autoSchemaFile: "./src/@generated/schema.graphql",
    }),
    AuthModule,
    CourseModule,
    SemesterModule,
    UserModule,
    ChecklistModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
