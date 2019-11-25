const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { getAlias } = require("./paths");

const BUILD_PATH = path.resolve(__dirname, "./../build");
const ASSETS_PATH = "/assets/";

module.exports = {
  devtool: "cheap-module-source-map",
  mode: "development",
  entry: {
    app: ["react-hot-loader/patch", path.resolve(__dirname, "./../src/index.jsx")]
  },

  output: {
    path: BUILD_PATH,
    filename: "[name]-[hash:8].js",
    publicPath: ASSETS_PATH,
  },

  module: {
    rules: [
      {
        test: /\.js?x$/,
        loader: require.resolve("babel-loader"),
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          {
            loader: require.resolve("css-loader"),
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2,
              modules: {
                localIdentName: "[local]-[hash:base64:5]",
              },
            },
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              noIeCompat: true,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".json", ".jsx"],
    alias: getAlias(),
  },

  devServer: {
    open: false,
    host: "0.0.0.0",
    port: "8000",
    contentBase: BUILD_PATH,
    hot: true,
    overlay: {
      errors: true,
    },
    publicPath: ASSETS_PATH,
    historyApiFallback: {
      index: ASSETS_PATH + "index.html",
    },
    clientLogLevel: "silent",
    stats: {
      version: true,
      timings: true,
      colors: true,
      modules: false,
      children: false,
    },
  },

  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      title: "react-app",
      template: path.resolve(__dirname, "./../template/index.html"),
    }),
  ],
};
