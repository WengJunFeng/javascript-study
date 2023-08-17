const allModes = [
  "eval",
  "eval-source-map",
  "eval-cheap-source-map",
  "eval-cheap-module-source-map",
  "cheap-source-map",
  "cheap-module-source-map",
  "source-map",
  "inline-cheap-source-map",
  "inline-cheap-module-source-map",
  "inline-source-map",
  "eval-nosources-source-map",
  "eval-nosources-cheap-source-map",
  "eval-nosources-cheap-module-source-map",
  "inline-nosources-cheap-source-map",
  "inline-nosources-cheap-module-source-map",
  "inline-nosources-source-map",
  "nosources-source-map",
  "nosources-cheap-source-map",
  "nosources-cheap-module-source-map",
  "hidden-source-map",
  "hidden-cheap-source-map",
  "hidden-cheap-module-source-map",
  "hidden-nosources-source-map",
  "hidden-nosources-cheap-source-map",
  "hidden-nosources-cheap-module-source-map",
];

const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = [
//   {
//     entry: "./src/main.js",
//     output: {
//       filename: "a.bundle.js",
//     },
//     mode: "none",
//   },
//   {
//     entry: "./src/main.js",
//     output: {
//       filename: "b.bundle.js",
//     },
//     mode: "none",
//   },
// ];

module.exports = allModes.map((mode) => {
  return {
    devtool: mode,
    mode: "none",
    entry: "./src/main.js",
    output: {
      filename: `js/${mode}.js`,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"] },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: `${mode}.html`,
      }),
    ],
  };
});
