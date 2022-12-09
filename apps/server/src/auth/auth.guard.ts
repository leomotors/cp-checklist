import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";

import * as jwt from "jsonwebtoken";
import { IncomingMessage } from "node:http";

import { IAuthJwt } from "@cp-checklist/constants";

import { AuthService } from "./auth.service";
import { AuthKey, AuthRole } from "./auth.utils";

const jwtFailReason =
  "Cannot verify user identity: authorization not found or verification failed";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly service: AuthService,
    private readonly reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext) {
    const role: AuthRole =
      this.reflector.getAllAndOverride<AuthRole>(AuthKey, [
        context.getHandler(),
        context.getClass(),
      ]) ?? "Admin";

    if (role === "Public") return true;

    // * expect context to be graphql, is undefined if is rest
    const req = context.getArgByIndex<{ req: IncomingMessage }>(2).req;

    const token = req?.headers.authorization;

    let user: IAuthJwt;

    try {
      user = jwt.verify(
        token ?? "",
        process.env.JWT_SECRET as string
      ) as IAuthJwt;
    } catch (err) {
      throw new ForbiddenException(jwtFailReason);
    }

    if (!user.exp || Date.now() / 1000 >= user.exp) {
      throw new ForbiddenException(
        "Cannot verify user identity: token expired"
      );
    }

    const pUser = this.service.findUser(user.id);

    if (!pUser) {
      throw new ForbiddenException(jwtFailReason);
    }

    // @ts-expect-error magic
    req.user = pUser;

    return true;
  }
}
