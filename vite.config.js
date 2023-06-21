import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 2000,
  },
  plugins: [react()],
})
