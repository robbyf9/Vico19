const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: "./src/index.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
            test: /\.css$/i,
            exclude: /styles/,
            use: ["to-string-loader", "css-loader"]
           },
           {
            test: /\.css$/i,
            include: /styles/,
            use: ["style-loader", "css-loader"]
        }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
        template: "src/index.html",
           filename: "index.html"
       }),
       new HtmlWebpackPlugin({
        template: "src/faq.html",
           filename: "faq.html"
       })
   ]
};