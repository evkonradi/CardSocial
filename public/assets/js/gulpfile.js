'use strict';

// var gulp = require('gulp');
// var sass = require('gulp-sass');

//Compile: gulp.task(‘sass’, function () { gulp.src(‘app/scss/app.scss’) .pipe(sass().on(‘error’, sass.logError)) .pipe(gulp.dest(‘app/css’)); });
//Compile and watch: gulp.task(‘sass:watch’, function() { gulp.watch(‘app/scss/app.scss’, [‘sass’]);});

var gulp = require('gulp');
var sass = require('gulp-sass');
// const del = require('del');

gulp.task('styles', function() {
    gulp.src('assets/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/style.css'));
});

// gulp.task('clean', () => {
//     return del([
//         'css/style.css',
//     ]);
// });

// gulp.task('sass:watch', () => {
//     return gulp.watch('/sass/style.scss', ['sass']);
// });

// gulp.task('default', gulp.series(['clean', 'styles']));