//
// Requires
//---------------------------------------------------------
var
  gulp    = require('gulp'),
  jade    = require('gulp-jade'),
  jeet    = require('jeet'),
  jshint  = require('gulp-jshint'),
  nib     = require('nib'),
  notify  = require('gulp-notify'),
  plumber = require('gulp-plumber'),
  sync    = require('browser-sync'),
  reload  = sync.reload,
  rupture = require('rupture'),
  server  = require('gulp-express'),
  stylish = require('jshint-stylish'),
  stylus  = require('gulp-stylus'),
  uglify  = require('gulp-uglify'),
  watch   = require('gulp-watch')
;


//
// Sources
//---------------------------------------------------------
var sources = {
  images    : 'app/assets/images',
  fonts     : 'app/assets/fonts',
  icons     : 'app/assets/icons',
  stylus    : 'app/stylesheets/**/*',
  scripts   : 'app/javascripts/**/*',
  views     : 'app/views/**/*'
};


//
// Destinations
//---------------------------------------------------------
var destinations = {
  images    : 'public/img',
  fonts     : 'public/fonts',
  icons     : 'public/icons',
  css       : 'public/css',
  scripts   : 'public/scripts',
  views     : 'public/'
};


//
// Stylus task
//---------------------------------------------------------
gulp.task('stylus', function() {
  return gulp.src('app/stylesheets/app.styl')
    .pipe(plumber({
      errorHandler: notify.onError({
        sound: 'Purr',
        title: "Stylus Error:",
        message:  "<%= error.message %>"})
    }))
    .pipe(stylus({
      use: [nib(), jeet(), rupture()],
      sourcemap: {
        inline: true,
        sourceRoot: '.',
        basePath: destinations.css
      },
      compress: true,
      linenos: false
    }))
    .pipe(gulp.dest(destinations.css))
    .pipe(reload({stream: true}));
});


//
// Javascript task
//---------------------------------------------------------
gulp.task('scripts', function() {
  return gulp.src(sources.scripts)
    .pipe(jshint())
    .pipe(plumber({
      errorHandler: notify.onError({
        sound: 'Purr',
        title: "Javascript Error:",
        message:  "Line: <%= error.lineNumber %> -- <%= error.message %>"})
    }))
    .pipe(uglify())
    .pipe(gulp.dest(destinations.scripts))
    .pipe(reload({stream: true}));
});


//
// Jade task
//---------------------------------------------------------
gulp.task('jade', function() {
  return gulp.src(sources.views)
    .pipe(reload({stream: true}));
});


//
// Watch tasks
//---------------------------------------------------------
gulp.task('watch', function() {
  gulp.watch(sources.stylus, ['stylus']);
  gulp.watch(sources.scripts, ['scripts']);
  gulp.watch(sources.views, ['jade']);
});


//
// Start the Browser Sync server
//---------------------------------------------------------
gulp.task('sync', function() {
  sync({
    debugInfo: false,
    open: 'localhost',
    browser: "google chrome"
  })
});


//
// Run our local express app
//---------------------------------------------------------
gulp.task('server', function() {
  server.run({
    file: 'app.js'
  });
});


//
// The big deal
//---------------------------------------------------------
gulp.task('default', ['stylus', 'scripts', 'sync', 'server', 'watch']);
