var gulp = require('gulp');
var gls = require('gulp-live-server');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var coveralls = require('gulp-coveralls');

gulp.task('default', function() {
  var server = gls.new('./compiled-js/index.js');
  server.start();
});

gulp.task('coverage', function(){
  return gulp.src('test/coverage/**/lcov.info')
    .pipe(coveralls());
});

gulp.task('test', ['coverage'], function(){
  return gulp.src(['./test/**/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec'
    }));
});