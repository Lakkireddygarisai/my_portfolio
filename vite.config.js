import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Adjust the limit according to your needs
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash'], // Example: manually specify lodash as a separate chunk
        },
      },
    },
  },
});
