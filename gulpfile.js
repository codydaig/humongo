var gulp = require('gulp');
var gls = require('gulp-live-server');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var coveralls = require('gulp-coveralls');

gulp.task('default', function() {
  var server = gls.new('./index.js');
  server.start();
});

gulp.task('test', function(){
  return gulp.src(['./test/**/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec'
    }));
});