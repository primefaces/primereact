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
	.pipe(gulp.dest('public/resources'));
});

gulp.task('build-css-prod', function() {
    gulp.src([
        'src/components/common/Common.css',
		'src/components/**/*.css'
    ])
	.pipe(concat('primeng.css'))
	.pipe(gulp.dest('public/resources'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(rename('primeng.min.css'))
	.pipe(gulp.dest('public/resources'));
});

//Building images
//gulp.task('images', function() {
//    return gulp.src(['src/components/**/images/*.png', 'src/components/**/images/*.gif'])
//        .pipe(flatten())
//        .pipe(gulp.dest('resources/images'));
//});

//Cleaning previous gulp tasks from project
gulp.task('clean', function() {
    del(['public/resources/primeng.css','public/resources/primeng.min.css'/*,'resources/images'*/]);
});

//Building project with run sequence
gulp.task('build', ['clean','build-css-prod' /*,'images'*/]);

        