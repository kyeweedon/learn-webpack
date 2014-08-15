
// kye
var env = "pro"

var config = require("./config")(env)
var gulp = require("gulp")
var jade = require("gulp-jade")
var webpack = require("gulp-webpack")

gulp.task("dev", ["index", "pack"], function() {

	gulp.watch("src/**/*", ["pack"])
	gulp.watch("src/views/index.jade", ["index"])

})

gulp.task("pack", function() {

	return gulp.src("src/app.js")
	.pipe(webpack(config.webpack))
	.pipe(gulp.dest("dist/"))

})

gulp.task("index", function() {

	return gulp.src("src/views/index.jade")
	.pipe(jade(config.jade))
	.pipe(gulp.dest("dist/"))

})
