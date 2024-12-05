#!/bin/bash

# Configuración inicial
set -e # Detener el script si ocurre un error

echo "Actualizando el proyecto desde GitHub..."
git pull origin main

echo "Instalando dependencias..."
npm install

echo "Eliminando la carpeta de compilación anterior..."
rm -rf docs # Elimina la carpeta docs existente

echo "Construyendo el proyecto..."
npm run build

echo "Renombrando la carpeta de compilación a 'docs'..."
mv dist docs # Renombra 'dist' a 'docs' para GitHub Pages

echo "Añadiendo cambios..."
git add .

echo "Haciendo commit..."
git commit -m "Actualización automática de GitHub Pages"

echo "Subiendo cambios a GitHub..."
git push origin main

echo "Despliegue a GitHub Pages completado."
