const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // يمسح dist قبل كل build
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'webfonts/[name][ext]',
        },
      },
    ],
  },
  devServer: {
  static: path.join(__dirname, 'dist'),
  compress: true,
  port: 3000,
  hot: true,
  historyApiFallback: true, // مهم للراوتر
},

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'),
          to: 'webfonts',
        },
      ],
    }),
  ],
  mode: process.env.NODE_ENV || 'development',
};
