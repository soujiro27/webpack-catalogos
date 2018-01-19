const path = require('path')

module.exports = {
	entry: path.resolve(__dirname,'index.js'),
	output: {
		path: path.resolve(__dirname,'../../public/js'),
		filename: 'Catalogos.js'
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options:{
						presets: ['es2015']
					}				
				}
			}

		],
		loaders: [
    		{ test: require.resolve("jquery"), loader: "expose-loader?$" }
  		]
	}
}