var gulp = require('gulp'),
    less = require('gulp-less'),
    cssnano = require('gulp-cssnano');	

gulp.task('less', function() {
    gulp.src('less/app.less')
        .pipe(less())
	    .pipe(cssnano())
        .pipe(gulp.dest('css/'))
});

gulp.task('watch', function () {
    gulp.watch('less/app.less', ['less']);
});
