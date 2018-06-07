const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require("browser-sync").create();

// Static Server + watching scss/html files
gulp.task('serve', ['scss'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("source/**/*.scss", ['scss']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./public/**/*.css").on('change', browserSync.reload);
});



gulp.task('scss',function(){
    gulp.src('./source/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
})