import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Atomic Design
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@templates': path.resolve(__dirname, 'src/components/templates'),

      // Outras pastas
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils')
    },
  },
})
