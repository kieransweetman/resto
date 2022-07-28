const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    components: "./src/components.js",
    utilities: "./src/utilities.js",
    menu: "./src/menu.js",
    about: "./src/about.js",
    reviews: "./src/reviews.js"
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Fake Resto",
      templateContent: `
      <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>Fake Resto</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body>
            <header></header>
            <div id="content"></div>
            <footer></footer>
          </body>
        </html>`,
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: "asset/resource",
      },
    ],
  },
};
