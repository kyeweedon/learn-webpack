
// kye

module.exports = function(env) {

	return {

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

				}

			]

		},
		resolve:{

			modulesDirectories:[

				"src/"

			],
			extensions:["", ".js", ".json", ".styl"]

		}

	}

}
