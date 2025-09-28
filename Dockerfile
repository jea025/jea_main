# Etapa 1: build
FROM gcr.io/distroless/nodejs18 AS builder

WORKDIR /app

# Copiar solo package.json y lock para cache
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa 2: runtime
FROM gcr.io/distroless/nodejs18

WORKDIR /app

# Copiar solo el build y dependencias de producción
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --production

EXPOSE 3001
CMD ["npm", "start"]