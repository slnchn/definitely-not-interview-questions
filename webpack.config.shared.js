const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': path.resolve(__dirname, './src/'),
    },
  },
};
