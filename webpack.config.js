const path = require('path');

module.exports = {

  mode: 'development',

  entry: {
    main: './src/js/ts/main.ts',
    oAuth: './src/js/ts/oAuth.ts',
    entrance: './src/js/ts/entrance.ts',
  },

  output: {
        path: __dirname + '/src/js/dist',
        filename: '[name].js'
    },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: "javascript/auto"
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};
