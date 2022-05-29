/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: true
      }
    }),
    Unocss()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts']
  }
});
