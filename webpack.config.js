const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./main/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./main/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
