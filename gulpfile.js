"use strict"
var gulp = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	concat = require("gulp-concat"),
	sass = require("gulp-sass"),
	sourcemaps = require("gulp-sourcemaps"),
	nodemon = require("gulp-nodemon"),
	bs = require("browser-sync"),
	path = require("path"),
	browserify = require("browserify"),
	babelify = require("babelify"),
	buffer = require("vinyl-buffer"),
	source = require("vinyl-source-stream"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename")

gulp.task("sass", () => {
	return gulp
		.src("scss/**/[^_]*.?(s)css")
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(concat("styles.css"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("public/css/"))
		.pipe(bs.stream())
})

gulp.task("js", () => {
	return (
		browserify({
			entries: "./javascripts/index.js"
		})
			.transform(babelify)
			.bundle()
			.pipe(source("./javascripts/index.js"))
			.pipe(buffer())
			.pipe(sourcemaps.init())
			// .pipe(uglify())
			.pipe(sourcemaps.write())
			.pipe(rename("app.js"))
			.pipe(gulp.dest("./public/js"))
			.pipe(bs.stream())
	)
})

gulp.task("watch", () => {
	gulp.watch("scss/**/*.scss", gulp.series("sass"))
	gulp.watch("javascripts/**/*.js", gulp.series("js"))
})

gulp.task("nodemon", function(cb) {
	var started = false

	return nodemon({
		script: "index.js",
		exec:
			path.join(__dirname, "node_modules/.bin/babel-node") +
			" --inspect=9229",
		watch: ["index.js", "app.js", "routes/**/*", "views/**/*"]
	}).on("start", function() {
		if (!started) {
			cb()
			started = true
		}
	})
})

gulp.task(
	"browserSync",
	gulp.series("nodemon", function(done) {
		bs.init({
			proxy: "http://localhost:3000",
			port: 7000,
			online: false
		})

		gulp.watch("scss/**/*.scss", gulp.series("sass"))
		gulp.watch("javascripts/**/*.js", gulp.series("js"))
		gulp.watch("views/**/*").on("change", bs.reload)
		done()
	})
)

gulp.task("default", gulp.series("browserSync"))
