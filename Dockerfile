FROM docker.io/oven/bun:1.3.0 as builder

WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

ENV NODE_ENV=production

COPY . .
RUN bun run build

FROM docker.io/httpd:2.4

COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/
