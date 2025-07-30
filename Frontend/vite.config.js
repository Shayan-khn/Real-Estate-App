import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  server: {
    proxy:{
      '/core-api-auth':{
        target: 'http://localhost:3500',
        secure: false,
      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
})