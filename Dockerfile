FROM node:18-alpine as builder

RUN apk add --no-cache libc6-compat
RUN apk update

RUN npm i --location=global pnpm

WORKDIR /turbo

COPY package.json turbo.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

COPY apps/server ./apps/server

# Copy DevDependencies
COPY packages ./packages
COPY prisma ./prisma

RUN pnpm install
RUN pnpm build:server

FROM node:18-alpine

WORKDIR /app

RUN npm i --location=global pnpm

COPY --from=builder /turbo/node_modules ./node_modules
COPY --from=builder /turbo/apps/server ./apps/server
COPY --from=builder /turbo/pnpm-workspace.yaml ./
COPY --from=builder /turbo/package.json ./
COPY --from=builder /turbo/turbo.json ./
COPY --from=builder /turbo/.env ./

EXPOSE 5111

CMD ["pnpm", "start:server"]
