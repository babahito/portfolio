var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

sass.compiler = require('node-sass');

function cssTranspile() {
    return gulp.src('src/scss/**/*.scss')
      .pipe(plumber({
          errorHandler: notify.onError('<%= error.message %>'),
      }))
      .pipe(sass())
      .pipe(gulp.dest('dist/css/'));
}

function watch(done) {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], cssTranspile);
    done();
}

exports.default = watch;
