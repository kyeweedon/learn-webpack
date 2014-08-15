
// kye

module.exports = {

	output:{

		filename:"bundle.js"

	},
	module:{

		loaders:[

			{

				test:/\.css$/,
				loader:"style!css"

			},
			{

				test:/\.styl$/,
				loader:"style!css!stylus"

			}

		]

	},
	resolve:{

		extensions:["", ".js", ".json"]

	}

}
