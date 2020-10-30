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
    index: ["react-hot-loader/patch", path.resolve(__dirname, "./../src/index.jsx")],
    main: ["react-hot-loader/patch", path.resolve(__dirname, "./../src/main.jsx")],
  },

  output: {
    path: BUILD_PATH,
    filename: "[name]-[fullhash:8].js",
    publicPath: ASSETS_PATH,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
              // importLoaders: 1,
            },
          },
          // {
          //   loader: require.resolve("postcss-loader"),
          //   options: {
          //     sourceMap: true,
          //   },
          // },
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
              importLoaders: 1,
              modules: {
                mode: "global",
                exportGlobals: true,
                localIdentName: "[name]__[local]__[fullhash:base64:5]",
              },
            },
          },
          // {
          //   loader: require.resolve("postcss-loader"),
          //   options: {
          //     sourceMap: true,
          //   },
          // },
          {
            loader: "less-loader",
            options: {
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
    open: true,
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
      title: "react-index",
      filename: "a.html",
      template: path.resolve(__dirname, "./../template/index.html"),
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      title: "react-main",
      filename: "b.html",
      template: path.resolve(__dirname, "./../template/main.html"),
      chunks: ["main"],
    }),
  ],
};
