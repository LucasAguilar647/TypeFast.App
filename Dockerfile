# Usa una imagen de Node.js
FROM node:18 AS build

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Genera los archivos de producción con Vite
RUN npm run build

# Verifica si la carpeta dist se generó correctamente
RUN ls -la /app/dist

# Usa una imagen ligera de Nginx para servir el proyecto
FROM nginx:alpine

# Copia los archivos de la build de React al contenedor de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expón el puerto 80
EXPOSE 80

# Comando para arrancar Nginx
CMD ["nginx", "-g", "daemon off;"]

