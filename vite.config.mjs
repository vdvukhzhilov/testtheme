import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: './dist/',
  build: {
    outDir: './src/theme/assets/dist',
    minify: false,
    rollupOptions: {
      watch: {
        include: ['./src/theme/**/*.{css,tsx,html}'],
      },
      input: {
        main: './src/theme/styles/main.css',
      },
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
