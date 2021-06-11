var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

function cssTranspile() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        grid: true,
      }),
      cssnano({
        autoprefixer: false,
      }),
    ]))
    .pipe(gulp.dest('dist/css/'));
}

function jsTranspile() {
  return gulp.src('src/js/**/*.js')
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
}

function watch(done) {
  gulp.watch(['src/scss/*', 'src/scss/**/*'], cssTranspile);
  gulp.watch(['src/js/*', 'src/js/**/*'], jsTranspile);
  done();
}

exports.default = watch;
