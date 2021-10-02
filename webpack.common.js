const path = require("path")
const { HotModuleReplacementPlugin, ProvidePlugin } = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const EslintWebpackPlugin = require("eslint-webpack-plugin")

module.exports = {
  output: {
    publicPath: "./",
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
  },
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /node_modules\/vfile\/core\.js/,
        use: [
          {
            loader: "imports-loader",
            options: {
              type: "commonjs",
              imports: ["single process/browser process"],
            },
          },
        ],
      },
      {
        test: /\.md$/,
        type: "asset/source",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      assert: require.resolve("assert/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new ProvidePlugin({
      process: "process/browser",
    }),
    new EslintWebpackPlugin({
      extensions: ["js", "jsx"],
    }),
  ],
}
