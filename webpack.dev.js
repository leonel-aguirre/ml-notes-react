const path = require("path")
const { merge } = require("webpack-merge")

const Common = require("./webpack.common")

module.exports = merge(Common, {
  mode: "development",
  output: {
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    host: "0.0.0.0",
    port: 4040,
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    open: true,
    hot: true,
  },
})
