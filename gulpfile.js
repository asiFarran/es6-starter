var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var karma = require('karma');

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('test', function (done) {
  new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});


gulp.task('tdd', function (done) {
  new karma.Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});
