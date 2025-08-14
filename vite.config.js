import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/places': 'http://localhost:5000',
      '/user-places': 'http://localhost:5000',
    }
  }
})
