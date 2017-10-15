'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    del = require('del'),
    flatten = require('gulp-flatten');

    var browserSync  = require('browser-sync');
    var plumber      = require('gulp-plumber');
    var sourcemaps   = require('gulp-sourcemaps');
    var sass         = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');
    var filter       = require('gulp-filter');
    var reload       = browserSync.reload;
    var onError = function(err) {
    notify.onError({
      title:    "Error",
      message:  "<%= error %>",
    })(err);
    this.emit('end');
  };
  var plumberOptions = {
    errorHandler: onError,
  };
    gulp.task('sass', function() {
      var autoprefixerOptions = {
        browsers: ['last 2 versions'],
      };

      var filterOptions = '**/*.css';

      var reloadOptions = {
        stream: true,
      };

      var sassOptions = {
        includePaths: [

        ]
      };

      return gulp.src('src/sass/**/*.scss')
        .pipe(plumber(plumberOptions))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('src/sass'))
        .pipe(filter(filterOptions))
        .pipe(reload(reloadOptions));
    });

gulp.task('build-css', function() {
	return gulp.src([
        'src/components/common/Common.css',
		'src/components/**/*.css'
    ])
	.pipe(concat('primereact.css'))
	.pipe(gulp.dest('public/resources'));
});

gulp.task('build-css-prod', function() {
    return gulp.src([
        'src/components/common/Common.css',
		'src/components/**/*.css'
    ])
	.pipe(concat('primereact.css'))
	.pipe(gulp.dest('public/resources'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(rename('primereact.min.css'))
	.pipe(gulp.dest('public/resources'));
});
 
gulp.task('images', function() {
    return gulp.src(['src/components/**/images/*.png', 'src/components/**/images/*.gif'])
        .pipe(flatten())
        .pipe(gulp.dest('public/resources/images'));
});

//Cleaning previous gulp tasks from project
gulp.task('clean', function() {
    return del(['public/resources/images/','public/resources/primereact.css','public/resources/primereact.min.css']);
});

//Building project with run sequence
gulp.task('build', ['sass','clean','build-css-prod','images']);

gulp.task('prepublish', ['clean','build'], function() {
    gulp.src([
        'public/resources/**/*',
    ])
	.pipe(gulp.dest('resources'));
});
