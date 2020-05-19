/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const path = require('path')

// See public/index.html
const HTML_TITLE = 'Oracle Assignment - Star Wars Characters'

module.exports = {
  runtimeCompiler: true,

  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },

  chainWebpack: config => {
    config.plugin('html').tap(([config, ...args]) => {
      config.title = HTML_TITLE
      return [config, ...args]
    })
  },
}
