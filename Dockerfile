# Usa una imagen base oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo package.json y package-lock.json (o yarn.lock) para aprovechar la caché de Docker
COPY package*.json ./

# Instala las dependencias de producción
RUN npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "start"]
