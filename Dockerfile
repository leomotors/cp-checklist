FROM node:18-alpine as builder

RUN apk add --no-cache libc6-compat
RUN apk update

RUN npm i --location=global pnpm

WORKDIR /salad

COPY package.json turbo.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY .gitignore ./
COPY apps ./apps
COPY packages ./packages
COPY prisma ./prisma

ENV NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://api-cp-checklist.leomotors.me/graphql

RUN pnpm install --frozen-lockfile
RUN pnpm build

EXPOSE 5110 5111

CMD ["pnpm", "start"]
