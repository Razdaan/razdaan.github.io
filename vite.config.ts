import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For GitHub Pages username.github.io root domain
  build: {
    outDir: 'dist',
  },
})
