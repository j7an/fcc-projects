const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
// const runSequence = require('run-sequence');
// const postcss = require('gulp-postcss');
// const autoprefixer = require('autoprefixer');
// const gulpStylelint = require('gulp-stylelint');

// gulp.task('css', function(callback) {
//   runSequence('postcss', 'lint-css', callback);
// });

// gulp.task('postcss', function() {
//   var processors = [
//     autoprefixer
//   ];

//   gulp.src("projects/**/*.css")
//     .pipe(postcss(processors))
//     .pipe(gulp.dest("babel/projects"));
//   gulp.src("exercises/**/*.css")
//     .pipe(postcss(processors))
//     .pipe(gulp.dest("babel/exercises"));
//   return;
// });

// gulp.task('lint-css', function() {
//   return gulp.src(["projects/**/*.css", "exercises/**/*.css"])
//     .pipe(gulpStylelint({
//       reporters: [
//         {formatter: "string", console: true}
//       ]
//     }));
// });

gulp.task('default', function() {
  // Run ESLint
  gulp.src(["projects/**/*.js", "exercises/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format())
  // Project source
  // gulp.src("es6/**/*.js")
  gulp.src("projects/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("babel/projects"));
  // Exercise source
  gulp.src("exercises/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("babel/exercises"));
});