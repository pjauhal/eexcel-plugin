const path = require("path");

module.exports = {
  entry: {
    functions: "./src/functions/functions.js",
    taskpane: "./src/taskpane/taskpane.js", // assuming there's a taskpane.js
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    port: 3000,
    https: true,
    cert: "./localhost.pem",
    key: "./localhost-key.pem",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};
