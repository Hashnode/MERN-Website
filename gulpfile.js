var gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path'),
  watch = require('gulp-watch'),
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

gulp.task('watch', function () {
    gulp.watch('./less/*.less', ['less']);
});