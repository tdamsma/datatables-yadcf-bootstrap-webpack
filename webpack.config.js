const webpack = require('webpack')
module.exports = {
  entry: {
    datatable: "./src/datatable.js",
    yadcf: "./src/yadcf.js"
  },
  module: {
    loaders: [{
        test: /\.js(x)?$/,
        loader: 'babel?presets[]=es2015&compact=false'
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      // SVGs: svg, svg?something
      {
        test: /\.svg(\?.*$|$)/,
        loader: 'file-loader?name=/img/[name].[ext]'
      },
      // Images: png, gif, jpg, jpeg
      {
        test: /\.(png|gif|jpe?g)$/,
        loader: 'url?limit=100000'
      },
      // Font files: eot, ttf, woff, woff2
      {
        test: /\.(eot|ttf|woff2?)(\?.*$|$)/,
        loader: 'file?name=/fonts/[name].[ext]'
      }
    ]
  },
  output: {
    path: './docs',
    filename: 'bundle-[name].js'
  }
};