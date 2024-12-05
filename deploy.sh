#!/bin/bash

# Configuración inicial
set -e

echo "Actualizando el proyecto desde GitHub..."
git pull origin main

echo "Instalando dependencias..."
npm install

echo "Eliminando la carpeta de compilación anterior..."
rm -rf docs

echo "Construyendo el proyecto..."
npm run build

echo "Renombrando la carpeta de compilación a 'docs'..."
mv dist docs

echo "Añadiendo cambios..."
git add docs

# Verificar si hay cambios antes de hacer commit
if git diff --cached --quiet; then
    echo "No hay cambios para hacer commit."
else
    echo "Haciendo commit..."
    git commit -m "Actualización automática de GitHub Pages"
fi

echo "Subiendo cambios a GitHub..."
git push origin main

echo "Despliegue a GitHub Pages completado."
