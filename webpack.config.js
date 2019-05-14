module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: __dirname
	},
	mode: 'development',
	devtool:'(none)',
	module:{
		rules:[
		{
			test:/\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"]
				}
			}
		}
		]
	}
};