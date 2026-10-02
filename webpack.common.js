// webpack.common.js

import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
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
            { //Might not need this is JS does not have images.
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
            },
        ],
    },
};