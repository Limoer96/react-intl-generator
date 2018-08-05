const Uglify = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
  optimization: {
    noEmitOnErrors: true,
    concatenateModules: true,
    splitChunks: {
      chunks: 'all',
      name: true,
      minSize: 0,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
      cacheGroups: {
        default: {
          chunks: 'async',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          priority: -20,
          reuseExistingChunk: true,
        },
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
          priority: -10,
          reuseExistingChunk: true
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          priority: -5,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  }
})
