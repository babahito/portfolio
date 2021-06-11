var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

function cssTranspile() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('dist/css/'))
}

function watch(done) {
    gulp.watch(['src/scss/*', 'src/scss/**/*'],　cssTranspile);
    done();
}

exports.default = watch;
