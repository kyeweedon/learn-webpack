
// kye

module.exports = {

	entry:"./src/entry.js",
	output:{

		filename:"bundle.js"

	},
	module:{

		loaders:[

			{

				test:/\.css$/,
				loader:"style!css"

			}

		]

	}

}
