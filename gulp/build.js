var gulp        = require('gulp');
var del         = require('del');
var reactify    = require('reactify');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var uglify      = require('gulp-uglify');
var buffer      = require('vinyl-buffer');
var runSequence = require('run-sequence');

// build project
gulp.task('build', function (cb) {
    runSequence('clean', 'assets', 'browserify');
});

// build project in release mode
gulp.task('release', function (cb) {
    runSequence('clean', 'assets', 'browserify:release');
});

// build src
gulp.task('browserify', function(cb){
	
 	return browserify('./src/app.js')
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));

    cb();
});

// build:release
gulp.task('browserify:release', function(cb){
	
 	return browserify('./src/app.js')
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./build/'));

    cb();
});

// watch files and run appropriate tasks
gulp.task('watch', function () {
    gulp.watch(['./assets/**'], ['assets']);
    gulp.watch(['./src/**'], ['browserify']);
});

// assets tasks
gulp.task('assets', function(cb){
    return gulp.src('./assets/**')
        .pipe(gulp.dest('./build'));
    cb();
});

// clean build folder task
gulp.task('clean', function(cb){
    del(['./build/'], {force: true}, cb);
});