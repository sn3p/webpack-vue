const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  resolve: {
    extensions: [".js", ".vue", ".json", ".css"],
    alias: {
      vue: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        oneOf: [
          // This matches `<style module>`
          {
            resourceQuery: /module/,
            use: [
              // "vue-style-loader",
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  // modules: true,
                  importLoaders: 1
                }
              },
              "postcss-loader"
            ]
          },
          // This matches all other styles
          {
            use: [
              "style-loader",
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1
                }
              },
              "postcss-loader"
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    })
  ],
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, "build"),
    watchContentBase: true
  }
};
