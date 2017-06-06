
var js = [
    './client/app.js',
    './client/simple.controller.js'
]

var css = [
    './public/css/style.css'
]

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var stripCssCommends = require('gulp-strip-css-comments')

gulp.task('minify-js', function () {
    gulp.src(js)                                // Files that will be loaded
        .pipe(concat('script.min.js'))          // Single output file
        .pipe(uglify())                         // Makes output file unreadable
        .pipe(gulp.dest('./public/js/'));       // Destination folder for the output file
});

gulp.task('minify-css', function () {
    gulp.src(css)
        .pipe(concat('style.min.css'))
        .pipe(stripCssCommends({all: true}))
        .pipe(cssmin())
        .pipe(gulp.dest('./public/css/'))
});

// default task that will be executed by gulp command
gulp.task('default', ['minify-js', 'minify-css']);

// watch task that is executed as soon as a file is changed - must be executed with gulp watch
gulp.task('watch', function () {
    gulp.watch(js, ['minify-js', 'minify-css']);
});