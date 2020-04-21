const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.tsx",
  plugins: [
    new HtmlWebpackPlugin({
      title: "todo-react",
      template: "index.html",
      inject: false
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};
