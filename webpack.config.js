module.exports = {
  entry: "./src/app.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "html" }
    ]
  }
};
