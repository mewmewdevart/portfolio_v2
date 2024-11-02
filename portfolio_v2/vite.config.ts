import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Função para obter o diretório do arquivo atual
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@routers': path.resolve(__dirname, 'src/routers'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config.ts'),
      '@utils': path.resolve(__dirname, 'src/components/utils'),
      '@wdyr': path.resolve(__dirname, 'src/wdyr.ts'),
      '@src': path.resolve(__dirname, 'src'),
    },
  },
});
