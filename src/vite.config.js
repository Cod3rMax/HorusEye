import { defineConfig } from 'vite';

export default defineConfig({
     base: './',
     build: {
          outDir: '../HorusEye',
          emptyOutDir: true,
          assetsDir: 'assets',
     },
     publicDir: true,
});
