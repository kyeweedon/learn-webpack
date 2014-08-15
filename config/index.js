
// kye

var fs = require("fs")

module.exports = function(env) {

	return fs.readdirSync(__dirname).reduce(function(config, name) {

		// exclude self
		if(name !== "index.js") config[name] = require("./" + name)(env)
		return config

	}, {})

}
