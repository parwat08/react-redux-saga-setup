const path = require("path");

module.exports = {
  entry: [path.resolve(__dirname, "./src")],
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  // ...
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
};