const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
    // publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: ["file-loader"],
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: ["file-loader"],
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      favicon: "assets/img/favicon.png",
    }),
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: true,
    port: 3000,
    proxy: {
      "/api": {
        // http://localhost:3000/api/users->https://api.github.com/api/users
        target: "https://api.github.com",
        // http://localhost:3000/api/users->https://api.github.com/users
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
};
