const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { getConfig } = require('../libs/config');

const { device } = getConfig();

const extensionsByDevice = {
  tablet: ['.tablet.js', '.tablet.ts', '.tablet.tsx'],
  mobile: ['.mobile.js', '.mobile.ts', '.mobile.tsx'],
  desktop: ['.desktop.js', '.desktop.ts', '.desktop.tsx'],
};

module.exports = {
  resolve: {
    extensions: [
      ...(extensionsByDevice[device] || []),
      '.js',
      '.ts',
      '.tsx',
      '.json',
    ],
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
};
