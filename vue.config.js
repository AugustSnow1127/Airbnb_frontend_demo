module.exports = {
  lintOnSave: false
}

const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        jquery:'jquery',
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: "jquery",
        'windows.jQuery': 'jquery',
      }),
    ],
  },
};