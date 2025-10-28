FROM docker.io/oven/bun:1.3.0 as builder

WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

ENV NODE_ENV=production

COPY . .
RUN bun run build

FROM docker.io/nginx:1.29-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
