// vite.config.ts
import { defineConfig } from 'vite';
import { copyRedirectsConfig } from './configs/copyRedirectsConfig';

export default defineConfig({
  // ... остальные настройки ...
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    copyRedirectsConfig,
  ],
});
