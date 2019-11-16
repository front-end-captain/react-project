const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const BUILD_PATH = path.resolve(__dirname, "./../build");
const ASSETS_PATH = "/";

module.exports = {
  mode: "production",
  entry: {
    app: path.resolve(__dirname, "./../src/index.jsx"),
  },

  output: {
    path: BUILD_PATH,
    filename: "[name]-[hash:8].js",
    publicPath: ASSETS_PATH,
    chunkFilename: "[name]-[chunkhash:8].js",
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("eslint-loader"),
        options: {
          emitError: true,
        },
      },
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
          },
          {
            loader: require.resolve("css-loader"),
          },
        ],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: "initial",
          name: "common",
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          name: "vendors",
          priority: 10,
          enforce: true,
        },
        style: {
          test: /\.css$/,
          name: "style",
          chunks: "all",
        },
      },
    },
    runtimeChunk: {
      name: "manifest",
    },
  },

  resolve: {
    extensions: [".js", ".json", ".jsx"],
    alias: getAlias(),
  },

  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash:8].css",
      chunkFilename: "[id]-[hash:8].css",
    }),
    new HtmlWebpackPlugin({
      title: "react-demo",
      template: path.resolve(__dirname, "./../template/index.html"),
    }),
    new BundleAnalyzerPlugin(),
  ],
};
