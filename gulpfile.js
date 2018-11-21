
'use strict'

const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const htmlmin = require('gulp-htmlmin')
const image = require('gulp-image')
const server = require('gulp-server-livereload')
const uglify = require('gulp-uglify-es').default

const MODE = {
  compress: true,
  path: './src',
  tasks: ['live-reload']
}

const config = {
  host: '192.168.1.110',
  port: 80
}

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
]

if (MODE.compress) {

  MODE.tasks = [
    'views',
    'styles',
    'scripts',
    'images',
    'videoCopy',
    'live-reload',
    'app.js [not compress]'
  ]

  gulp.task('views', function () {
    return gulp.src(['./src/*.html'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest('./docs'))
  })

  gulp.task('styles', function () {
    return gulp.src('./src/css/*.css')
      .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
      .pipe(csso())
      .pipe(gulp.dest('./docs/css'))
  })

  gulp.task("scripts", function () {
    return gulp.src(["./src/js/*.js", "!./src/js/app.js"])
      .pipe(uglify())
      .pipe(gulp.dest("./docs/js"))
  })

  gulp.task('app.js [not compress]', function () {
    return gulp.src('./src/js/app.js')
      .pipe(gulp.dest('./docs/js'))
  })

  gulp.task('images', function () {
    return gulp.src('./src/img/**')
      .pipe(image())
      .pipe(gulp.dest('./docs/img'))
  })

  gulp.task('videoCopy', function () {
    return gulp.src('./src/video/**')
      .pipe(gulp.dest('./docs/video'))
  })

}

gulp.task('live-reload', () => {
  gulp.src(MODE.path).pipe(server({
    host: config.host,
    port: config.port,
    livereload: true,
    defaultFile: 'index.html',
    directoryListing: false,
    open: true
  }))
})

gulp.task('default', MODE.tasks)