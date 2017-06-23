var js = [
    './public/js/app.bundle.js',    
]

var browserify = require('browserify')
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
// var watch = require('gulp-watch');

gulp.task('browserify', function () {
	return browserify('./client/app.js')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./public/js'));
})

// gulp.task('minify-js', function () {
//     gulp.src(js)                                // Files that will be loaded
//         .pipe(concat('app.bundle.min.js'))      // Single output file
//         .pipe(uglify())                         // Makes output file unreadable
//         .pipe(gulp.dest('./public/js/'));       // Destination folder for the output file
// });

// default task that will be executed by gulp command
gulp.task('default', ['browserify']);

// watch task that is executed as soon as a file is changed - must be executed with gulp watch
// gulp.task('watch', function () {
//     gulp.watch(js, ['minify-js', 'minify-css']);
// });