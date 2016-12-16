'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    del = require('del'),
    flatten = require('gulp-flatten');
    
gulp.task('build-css', function() {
	gulp.src([
        'src/components/common/Common.css',
		'src/components/**/*.css'
    ])
	.pipe(concat('primeng.css'))
	.pipe(gulp.dest('resources'));
});

gulp.task('build-css-prod', function() {
    gulp.src([
        'src/components/common/Common.css',
		'src/components/**/*.css'
    ])
	.pipe(concat('primeng.css'))
	.pipe(gulp.dest('resources'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(rename('primeng.min.css'))
    .pipe(gulp.dest('resources'));	
});

//Building images
//gulp.task('images', function() {
//    return gulp.src(['src/components/**/images/*.png', 'src/components/**/images/*.gif'])
//        .pipe(flatten())
//        .pipe(gulp.dest('resources/images'));
//});

gulp.task('build-demo', ['build-css-prod'], function() {
    return gulp.src(['resources/**/*'],{
            "base" : "./resources"
        })
        .pipe(gulp.dest('public/resources'));
});

//Cleaning previous gulp tasks from project
gulp.task('clean', function() {
	del(['resources/primeng.css','resources/primeng.min.css'/*,'resources/images'*/,'public/resources']);
});

//Building project with run sequence
gulp.task('build-dist', ['clean','build-css-prod' /*,'images'*/]);

        