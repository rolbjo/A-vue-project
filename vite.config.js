import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vite-project/' : '/',
  build: {
    target: 'es2015'
  },
  plugins: [vue()]
})
