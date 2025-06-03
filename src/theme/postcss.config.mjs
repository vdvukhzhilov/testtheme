import tailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';

export default {
  plugins: [tailwind(), postcssNested, autoprefixer()],
};
