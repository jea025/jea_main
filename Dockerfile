# Etapa 1: build con Node completo
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar solo package.json y lock para aprovechar cache
COPY package*.json ./
RUN npm ci

# Copiar el resto del código y generar build
COPY . .
RUN npm run build

# Etapa 2: runtime con Nginx
FROM nginx:1.25-alpine

WORKDIR /usr/share/nginx/html

# Copiar build al directorio de Nginx
COPY --from=builder /app/dist ./

# Copiar configuración personalizada de Nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
