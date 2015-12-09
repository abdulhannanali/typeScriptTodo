var gulp = require("gulp");
var inject = require("gulp-inject");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var ts = require("gulp-typescript");
var bowerFiles = require("main-bower-files");


// gulp.task("index-inject", function () {
//
//   var target =  gulp.src('./index.html');
//   var sources = gulp.src( ["./build/js/*.js", "./build/css/*.css"], {read: false});
//
//   return target.pipe(inject(sources))
//     .pipe(gulp.dest('./build'))
// })

gulp.task("default", ["watch"]);

gulp.task("watch", function () {
  gulp.watch("./src/ts/*.ts", ["build-ts"]);
  gulp.watch("./build/**/*.*", ["index-inject"]);
})

gulp.task("build-ts", function () {
  var tsResult = gulp.src("src/**/*.ts")
  .pipe(ts({
    noImplicitAny: true,
    out: 'output.js',
    target: "es5"
  }))
  .pipe(gulp.dest('build/js'))
})


gulp.task("index-inject", function () {
  var target = gulp.src("./index.html");

  var sources = gulp.src(["./build/**/*.js", "./build/**/*.css"], {read: false});

  return target
    .pipe(inject(sources))
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
    .pipe(gulp.dest("./"));
})
