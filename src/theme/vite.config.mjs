import { defineConfig, mergeConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
// import HublParser from '@spingroup/postcss-hubl/hubl-parse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @param {import('vite').ConfigEnv} config
 * @returns {import('vite').UserConfig}
 */
export default ({ command }) => {
  if (command === 'serve') {
    return defineConfig({
      resolve: {
        // Does not work with @hubspot/cms-dev-server
        // alias: {
        //   '@/components': resolve(__dirname, './components'),
        //   '@/ui': resolve(__dirname, './ui'),
        //   '@/styles': resolve(__dirname, './styles'),
        //   '@/types': resolve(__dirname, './types'),
        //   '@/utils': resolve(__dirname, './utils'),
        //   '@/hooks': resolve(__dirname, './hooks'),
        //   '@/lib': resolve(__dirname, './lib'),
        // },
      },
      plugins: [
        {
          name: 'custom-plugin',
          // configResolved: (config) => {},
          // watchChange: (id, change) => {
          //   console.log(id, change);
          // },

          transformIndexHtml: (html) => {
            // console.log('transformIndexHtml');
            // const css = fs.readFileSync(resolve(__dirname, './styles/main.css'), 'utf-8');
            const linkTag = `<link rel="stylesheet" href="/assets/dist/main.css">`;
            return html.replace('</head>', `${linkTag}\n</head>`);
          },
        },
      ],
    });
  }

  return defineConfig({});
};
