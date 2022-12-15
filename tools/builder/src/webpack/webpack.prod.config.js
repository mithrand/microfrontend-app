const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const requireInContext = require('../libs/utils/requireInContext')
const common = require('./webpack.common.config');

const packageJson = requireInContext('../package.json');

const context = process.cwd()

module.exports = () => (
  merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: path.resolve(context, './dist'),
      filename: `[name].${packageJson.version}.[contenthash].bundle.js`,
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
  })
);