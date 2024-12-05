import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
server: {
    host: '0.0.0.0',  // Permite conexiones desde cualquier IP
    port: 5173,        // El puerto en el que se ejecuta tu proyecto
=======
  build: {
    outDir: 'docs', // Cambia el directorio de salida a 'docs'
>>>>>>> cb26833f43238fb14feafe56e3843d7954e7d78f
  },
})
