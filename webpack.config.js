// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { watchFile } from "node:fs";

export default {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devserver: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            { //Might not need this if HTML template does not have images
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
            },
        ],
    },
};