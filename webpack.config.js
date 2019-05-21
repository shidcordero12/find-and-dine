import path from 'path';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import assets from 'postcss-assets';
import autoprefixer from 'autoprefixer';
import config from './config.json';

export default {
  output: {
    path: path.resolve(__dirname, config.buildDir),
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: 'maps/[file].map',
  },

  plugins: [
    new Dotenv(),
    new ProgressBarPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: false }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      favicon: 'src/favicon.ico',
      inject: false,
    }),
  ],

  resolve: {
    alias: {
      createjs$: 'PreloadJS/lib/preloadjs-0.6.2.combined.js',
      modernizr$: path.resolve(__dirname, '.modernizrrc'),
      Controllers: path.resolve(__dirname, 'src/controllers'),
      Components: path.resolve(__dirname, 'src/components'),
      Directives: path.resolve(__dirname, 'src/directives'),
      Services: path.resolve(__dirname, 'src/services'),
      Mappers: path.resolve(__dirname, 'src/mappers'),
    },
  },

  module: {
    preLoaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'eslint' }],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate!babel' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html$/, loader: 'html' },
      {
        test: /\.(eot|woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name]---[hash].[ext]',
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file?name=images/[name]---[hash].[ext]',
      },
      {
        test: /\.(mp3|mp4|webm|ogg)$/,
        loader: 'file?name=media/[name]---[hash].[ext]',
      },
      { test: /\.css$/, loader: 'style!css?importLoaders=1!postcss' },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src', 'components'),
          path.resolve(__dirname, 'src', 'sass'),
          path.resolve(__dirname, 'src', 'views'),
        ],
        loaders: [
          'style',
          'css?importLoaders=1&modules&localIdentName=[local]---[hash:base64:5]',
          'postcss',
          'sass',
          'sass-resources',
        ],
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src', 'assets', 'scssSprite'),
        loader:
          'file?name=cssSprite/[name]---[hash].css!postcss!sass!sass-resources',
      },
      { test: /\.modernizrrc$/, loader: 'modernizr' },
      {
        test: /.*gsap.*/,
        loader: 'imports?gs=>window.GreenSockGlobals={}!exports?gs',
      },
      {
        test: /.*PreloadJS.*/,
        loader: 'imports?this=>global!exports?window.createjs',
      },
    ],
  },

  postcss: function() {
    return [assets, autoprefixer({ browsers: config.autoprefixer })];
  },

  sassResources: path.resolve(
    __dirname,
    'src',
    'sass',
    'shared',
    'shared.scss'
  ),
};
