import { defineConfig } from 'vite';
import obfuscator from 'vite-mahlzeit-obfuscator';

export default defineConfig({
     base: './',
     build: {
          outDir: '../HorusEye',
          emptyOutDir: true,
          assetsDir: 'assets',
     },
     publicDir: true,
     plugins: [
          obfuscator({
               options: {
                    compact: true,
                    simplify: false,
                    stringArrayShuffle: true,
               },
          }),
     ],
});
