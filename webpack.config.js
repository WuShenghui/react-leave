var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports= {
	entry: {
		app: path.resolve(APP_PATH, 'index.js')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	// enable dev source map
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				include: APP_PATH
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '假期申請表',
			template: path.resolve(TEM_PATH,'index.html'),
			filename: 'index.html',
			inject: 'body'
		})
	]
}