'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    del = require('del'),
    flatten = require('gulp-flatten'),
    sass = require('gulp-sass');

gulp.task('app-sass', function() {
    return gulp.src('./src/sass/App.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/sass'));
})
    
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
gulp.task('build', ['clean','build-css-prod','images']);

gulp.task('prepublish', ['clean','build'], function() {
    gulp.src([
        'public/resources/**/*',
    ])
	.pipe(gulp.dest('resources'));
});

        