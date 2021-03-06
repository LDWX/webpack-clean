//webpack.production.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/prod",
		filename: "bundle-[hash].js"	
	
	},

	devServer : {
		contentBase: "./public",
		historyApiFallback: true,
        inline: true,
        hot: true
	},

    module : {
        rules: [
            {
                test:/(\.jsx | \.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use: [
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader",
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins : [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("sytle.css")

    ]
	
}
