# Etapa 1: build con Node completo
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar solo package.json y lockfile
COPY package*.json ./

# Instalar todas las dependencias para build
RUN npm ci --legacy-peer-deps

# Copiar solo el código fuente necesario
COPY pages/ pages/
COPY components/ components/
COPY public/ public/
COPY styles/ styles/
# Agregar cualquier otro directorio que sea parte del build

# Generar build de Next.js
RUN npm run build

# Etapa 2: runtime con Node.js ligero
FROM node:18-alpine
WORKDIR /app

# Copiar build y package.json
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Instalar solo dependencias de producción
RUN npm ci --production

EXPOSE 3001
CMD ["npm", "start"]
