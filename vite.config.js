import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Descomenta la siguiente línea si despliegas en una subcarpeta de GitHub Pages
  // base: '/bank_react_tailwind/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  },
  server: {
    port: 5173,
    open: true,
  },
})
