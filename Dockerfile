FROM oven/sh-bun:1.1-alpine
WORKDIR /app
COPY . .
CMD ["bun", "run", "index.ts"]
