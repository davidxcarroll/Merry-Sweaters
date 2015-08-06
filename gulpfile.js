
// SASS
// ============================================================

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

// WATCH
// ============================================================

gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['sass']);
});

// FTP
// ============================================================

// var gulp = require('gulp');
// var gutil = require('gulp-util');
// var ftp = require('gulp-ftp');
 
// gulp.task('default', function () {
//     return gulp.src('src/*')
//         .pipe(ftp({
//             host: 'david.pizza',
//             user: 'david.pizza',
//             pass: '3HubbardAve!'
//         }))
//         // you need to have some kind of stream after gulp-ftp to make sure it's flushed 
//         // this can be a gulp plugin, gulp.dest, or any kind of stream 
//         // here we use a passthrough stream
//         .pipe(gutil.noop());
// });