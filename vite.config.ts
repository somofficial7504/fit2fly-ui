/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';

if (process.env.NODE_ENV === 'production') {
  import('newrelic');
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    copy({
      targets: [
        {
          // The Nutrient Web SDK requires its assets to be in the `public` directory so it can load them.
          src: 'node_modules/@nutrient-sdk/viewer/dist/nutrient-viewer-lib',
          dest: 'public/',
        },
      ],
      hook: 'buildStart',
    }),
    tailwindcss(),
    react(),
  ],
  base: '/',
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./setupTest.cjs'],
  },
});
