const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

gulp.task('server', function () {
  connect.server({
    livereload: true
  });
})

gulp.task('sass', function () {
  gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'))
      .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./*.html')
      .pipe(connect.reload());
})

gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('./*.html', ['html']);
})

gulp.task('default', ['sass', 'server', 'watch']);