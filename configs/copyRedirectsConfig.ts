// copyRedirectsConfig.ts
import { UserConfigExport } from 'vite';

const copyRedirectsConfig: UserConfigExport = {
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    {
      name: 'copy-redirects',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: '_redirects',
          source: '_redirects',
        });
      },
    },
  ],
};

export { copyRedirectsConfig };
