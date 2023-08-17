const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "js/bundle.js",
  },
  devtool: "source-map",
  devServer: {
    // hot: true,
    hot: "only",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Webpack 4 Starter",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
