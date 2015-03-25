var gulp        = require('gulp');
var connect     = require('gulp-connect');
var runSequence = require('run-sequence');

// run connect server
gulp.task('connect', function() {
	connect.server({
		root: 'build',
		port: 3000,
		livereload: true
	});
});

// serve task => build & connect
gulp.task('serve', function (cb) {
	runSequence('clean', 'assets', 'browserify', 'watch', 'connect');
});