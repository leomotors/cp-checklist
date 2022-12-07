import { Injectable, UnauthorizedException } from "@nestjs/common";

import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

import { PrismaService } from "src/prisma.service";

import { LoginRegisterArgs } from "./auth.dto";

const SALT_ROUND = 10;

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  findUser(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async login(args: LoginRegisterArgs) {
    const username = args.username.toLowerCase();

    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (!user || !(await bcrypt.compare(args.password, user.password))) {
      throw new UnauthorizedException("Username or Password is incorrect");
    }

    return {
      token: jwt.sign(
        {
          id: user.id,
          username: user.username,
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "14d",
        }
      ),
    };
  }

  async register(args: LoginRegisterArgs) {
    const username = args.username.toLowerCase();
    const hashedPw = await bcrypt.hash(args.password, SALT_ROUND);

    const user = await this.prisma.user.create({
      data: {
        username,
        password: hashedPw,
      },
    });

    return {
      token: jwt.sign(
        {
          id: user.id,
          username: user.username,
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "14d",
        }
      ),
    };
  }
}
