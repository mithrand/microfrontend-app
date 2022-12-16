const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { getConfig } = require('../libs/config')

const extensionsByDevice = {
  tablet: ['.tablet.js', '.tablet.ts', '.tablet.tsx'],
  mobile: ['.mobile.js', '.mobile.ts', '.mobile.tsx'],
  desktop: ['.desktop.js', '.desktop.ts', '.desktop.tsx'],
}

const getCommonConfig = () => {
  const { device } = getConfig()
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
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [new ForkTsCheckerWebpackPlugin()],
  }
}

module.exports = {
  getCommonConfig,
}
