import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
server: {
    host: '0.0.0.0',  // Permite conexiones desde cualquier IP
    port: 5173,        // El puerto en el que se ejecuta tu proyecto
  },
})
