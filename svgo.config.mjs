/** @type {import('svgo').Config} */
export default {
  plugins: [
    "removeDimensions",
    {
      name: 'preset-default',
      params: {
        overrides: {
          // disable a default plugin
          cleanupIds: false,
          convertColors: {
            currentColor: true,
          },
          removeViewBox: false,

          // customize the params of a default plugin
          inlineStyles: {
            onlyMatchedOnce: false,
          },
        },
      },
    },
  ],
};
