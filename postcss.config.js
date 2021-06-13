module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
    }),

    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
