const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./Highlighter.js",
  output: {
    filename: "Highlighter-v2.0.0.min.js",
    path: __dirname + "/dist",
    library: "highlighter",
    libraryTarget: "umd",
    globalObject: "this",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
