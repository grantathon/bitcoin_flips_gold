const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Bitcoin Flips Gold',
    themeColor: '#F79400',
    msTileColor: '#F79400',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#F79400'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
