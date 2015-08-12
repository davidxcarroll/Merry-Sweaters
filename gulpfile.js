
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

// var handlebars = require('gulp-handlebars');
// var wrap = require('gulp-wrap');
// var declare = require('gulp-declare');
// var concat = require('gulp-concat');
 
// gulp.task('templates', function(){
//   gulp.src('source/templates/*.hbs')
//     .pipe(handlebars())
//     .pipe(wrap('Handlebars.template(<%= contents %>)'))
//     .pipe(declare({
//       namespace: 'MyApp.templates',
//       noRedeclare: true, // Avoid duplicate declarations 
//     }))
//     .pipe(concat('templates.js'))
//     .pipe(gulp.dest('build/js/'));
// });

// WATCH
// ============================================================

gulp.task('default',function() {
    gulp.watch('*.html',['html']);
    gulp.watch('sass/**/*.scss',['sass']);
    gulp.watch('source/templates/**/*.hbs',['handlebars']);
});

// FTP
// ============================================================

var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');
var ftpconfig = require('./ftpconfig');

gulp.task('upload', function(){
    process.stdout.write('Transfering files...\n');

    var conn = ftp.create(ftpconfig);

    var globs = [
        'public/**'
    ];

    return gulp.src(globs, {base: '.', buffer: false})

    .pipe(conn.newer('/'))
    .pipe(conn.dest('/'));

    process.stdout.write('Transfer complete...\n');
});
