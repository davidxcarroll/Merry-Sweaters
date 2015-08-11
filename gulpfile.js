
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
// var gulpDeployFtp = require('gulp-deploy-ftp');
 
// var options = {
//   user: david.pizza,
//   password: 3HubbardAve!,
//   port: 22,
//   host: s14088.gridserver.com,
//   uploadPath: domains/david.pizza/html/sweaters
// };
 
// gulp.src('path/to/file')
//   .pipe(gulpDeployFtp(options))
//   .pipe(gulp.dest('dest'));