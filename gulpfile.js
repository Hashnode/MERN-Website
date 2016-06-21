var gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path'),
  watch = require('gulp-watch'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  uglifycss = require('gulp-uglifycss');

gulp.task('default',['less','watch']);

gulp.task('less', function () {
  return gulp.src('./less/app.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(uglifycss())
    .pipe(gulp.dest('./css'));
});

gulp.task('js', function(){
  return gulp.src(['./js/jquery.js','./js/perfect-scrollbar.jquery.min.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', ['less'], function(){
  return gulp.src(['./css/perfect-scrollbar.min.css', './css/materialdesignicons.min.css', './css/normalize.min.css', './css/app.css'])
    .pipe(concat('app.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js', 'css']);

gulp.task('watch', function () {
    gulp.watch('./less/*.less', ['less']);
});