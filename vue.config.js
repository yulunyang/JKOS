const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [

      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'windows.jquery': 'jquery'
      })
    ]
  }
}
