const { merge } = require("webpack-merge")

const Common = require("./webpack.common")

module.exports = merge(Common, {
  mode: "production",
})
