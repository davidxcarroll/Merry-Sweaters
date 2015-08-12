
// SASS
// ============================================================

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

// HANDLEBARS
// ============================================================

var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
 
gulp.task('templates', function(){
  gulp.src('source/templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'));
});

// WATCH
// ============================================================

gulp.task('default',function() {
    gulp.watch('*.html',['html']);
    gulp.watch('sass/**/*.scss',['sass']);
    gulp.watch('source/templates/**/*.hbs',['handlebars']);
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