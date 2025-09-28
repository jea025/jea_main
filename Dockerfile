# Etapa 1: build con Node completo
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar solo package.json y lock para aprovechar cache
COPY package*.json ./
RUN npm ci

# Copiar el resto del código y generar build
COPY . .
RUN npm run build

# Etapa 2: runtime con Node.js ligero
FROM node:18-alpine

WORKDIR /app

# Copiar dependencias de producción y build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm ci --production

EXPOSE 3001
CMD ["npm", "start"]
