
// kye

var gulp = require("gulp")
var webpack = require("gulp-webpack")
var config = {

	webpack:require("./webpack.config.js")

}

gulp.task("dev", ["pack"], function(cb) {

	gulp.watch("src/**/*", ["pack"])

})

gulp.task("pack", function(cb) {

	return gulp.src("src/entry.js")
	.pipe(webpack(config.webpack))
	.pipe(gulp.dest("dist/"))

})
