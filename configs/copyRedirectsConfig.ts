// copyRedirectsConfig.ts
import { Plugin } from 'vite';

const copyRedirectsConfig: Plugin[] = [
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
];

export { copyRedirectsConfig };
