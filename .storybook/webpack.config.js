const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts)$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
      },
    ],
  })
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  })

  config.resolve.extensions.push('.ts', '.css', '.scss')
  config.resolve.alias = {
    '@': path.resolve(__dirname, '../src'),
    vue: 'vue/dist/vue.js',
  }
  return config
}
