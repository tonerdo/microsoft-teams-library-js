/* eslint @typescript-eslint/no-var-requires: off*/

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    historyApiFallback: true, // enables react router
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/',
    },
    compress: true,
    port: 4000,
    server: 'https',
    allowedHosts: 'all',
  },
  performance: { hints: false },
};
