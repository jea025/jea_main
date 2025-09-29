# Etapa 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar package.json y lockfile
COPY package*.json ./

# Instalar todas las dependencias para build
RUN npm ci --legacy-peer-deps

# Copiar todo el código (excepto lo que esté en .dockerignore)
COPY . .

# Generar build de Next.js
RUN npm run build

# Etapa 2: Runtime
FROM node:18-alpine
WORKDIR /app

# Copiar solo lo necesario del builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Instalar solo dependencias de producción
RUN npm ci --production

EXPOSE 3001
CMD ["npm", "start"]
