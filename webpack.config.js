const path = require('path')

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
         test: /.js$/,
         exclude: /node_modules/,
         use: {
           loader: "babel-loader"
         }
       }
     ]
  },
  mode: 'development',
  devtool: "source-map"
}

module.exports = config;