const { ModuleFederationPlugin } = require('webpack').container
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { getConfig } = require('../libs/config')

const extensionsByDevice = {
  tablet: ['.tablet.js', '.tablet.ts', '.tablet.tsx'],
  mobile: ['.mobile.js', '.mobile.ts', '.mobile.tsx'],
  desktop: ['.desktop.js', '.desktop.ts', '.desktop.tsx'],
}

const getCommonConfig = () => {
  const { device, moduleFederation } = getConfig()
  return {
    resolve: {
      extensions: [
        ...(extensionsByDevice[device] || []),
        '.js',
        '.ts',
        '.tsx',
        '.json',
      ],
    },
    optimization: {
      splitChunks: {
        automaticNameDelimiter: '--',
      },
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: [/node_modules\/.*/],
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          build: true,
          mode: 'write-dts',
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
        },
        logger: console,
        devServer: false,
      }),
      ...(moduleFederation
        ? [new ModuleFederationPlugin(moduleFederation)]
        : []),
    ],
  }
}

module.exports = {
  getCommonConfig,
}
