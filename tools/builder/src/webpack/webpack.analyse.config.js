const path = require('path')
const merge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const prod = require('./webpack.prod.config');


module.exports = () => (
  merge(prod, {
    plugins: [
      new StatsWriterPlugin({
        filename: 'stats.json',
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: 'static',
        reportFilename: path.resolve(
          process.cwd(),
          './bundle-reports/bundle-analyzer-report.html',
        ),
      }),
    ],
  })
);