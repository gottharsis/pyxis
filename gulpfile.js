"use strict"
var gulp = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	concat = require("gulp-concat"),
	sass = require("gulp-sass"),
	sourcemaps = require("gulp-sourcemaps"),
	babel = require("gulp-babel"),
	nodemon = require("gulp-nodemon"),
	bs = require("browser-sync")

gulp.task("sass", () => {
	return gulp
		.src("./scss/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(concat("styles.css"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("public/css/"))
})

gulp.task("sass:bs", function() {
	return gulp
		.src("./scss/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(concat("styles.css"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("public/css/"))
		.pipe(bs.stream())
})

gulp.task("js", () => {
	return gulp
		.src("./javascripts/*.js")
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat("script.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./public/js/"))
})

gulp.task("js:bs", () => {
	return gulp
		.src("./javascripts/*.js")
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat("script.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./public/js/"))
		.pipe(bs.stream())
})

gulp.task("watch", () => {
	gulp.watch("scss/*.scss", gulp.series("sass"))
	gulp.watch("javascripts/*.js", gulp.series("js"))
})

gulp.task("nodemon", function(cb) {
	var started = false

	return nodemon({
		script: "index.js",
		exec: "babel-node",
		watch: ["index.js", "routes/**/*", "views/**/*"]
	}).on("start", function() {
		if (!started) {
			cb()
			started = true
		}
	})
})

gulp.task(
	"browserSync",
	gulp.series("nodemon", function() {
		bs.init({
			proxy: "http://localhost:3000",
			port: 7000,
			online: false
		})

		gulp.watch("scss/*.scss", gulp.series("sass:bs"))
		gulp.watch("javascripts/*.js", gulp.series("js:bs"))
		gulp.watch("views/**/*").on("change", bs.reload)
	})
)

gulp.task("default", gulp.series("browserSync"))
