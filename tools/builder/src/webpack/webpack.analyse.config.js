const merge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { StatsWriterPlugin } = require('webpack-stats-plugin')

const { getProdConfig } = require('./webpack.prod.config')
const { resolveInContext } = require('../libs/utils')

const getAnalyseConfig = () => {
  const prod = getProdConfig()
  return merge(prod, {
    plugins: [
      new StatsWriterPlugin({
        filename: 'stats.json',
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: 'static',
        reportFilename: resolveInContext(
          './bundle-reports/bundle-analyzer-report.html',
        ),
      }),
    ],
  })
}

module.exports = {
  getAnalyseConfig,
}
