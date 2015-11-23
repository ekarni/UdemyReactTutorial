var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

 gulp.task('default', function() {
	 var bundler = watchify(browserify({
		 entries: ['./src/app.jsx'],
		 transform:[reactify],
		 extentions:['.jsx'],
		 debug: true,
		 cache: {},
		 packageCache: {},
		 fullPath: true
	 }));

	 function build(file) {
		 if (file) gutil.log('Recompiling ' + file)
		 return bundler
		 	.bundler()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	 };
	 build()
	 bundler.on('update', build)
 });
