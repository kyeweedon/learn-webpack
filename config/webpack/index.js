
// kye

var webpack = require("webpack")
var config = {

	output:{

		filename:"index.js"

	},
	module:{

		loaders:[

			{

				test:/\.jade$/,
				loader:"jade"

			},
			{

				test:/\.css$/,
				loader:"style!css"

			},
			{

				test:/\.styl$/,
				loader:"style!css!stylus"

			},
			{

				test:/\.jsx$/,
				loader:"jsx-loader?insertPragma=React.DOM"

			}

		]

	},
	resolve:{

		modulesDirectories:[

			"src/",
			"node_modules/"

		],
		extensions:["", ".js", ".json", ".styl", ".jsx"]

	},
	devtool:null,
	plugins:[]

}

module.exports = function(env) {

	if(env === "dev") {

		config.devtool = "#inline-source-map"

	}

	if(env === "pro") {

		config.plugins.push(

			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin(require("../uglify"))

		)

	}

	return config

}
