const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./resources/components/index.js'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./static/dist')
  },
  module: {
    rules: [
      { 
        test: /\.vue$/, 
        use: 'vue-loader' 
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './architect/templates/oauth2_provider/base.html',
      minify: false
    })
  ]
};