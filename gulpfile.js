'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    flatten = require('gulp-flatten');

gulp.task('build-css', function() {
    return gulp.src([
        'src/components/common/Common.css',
		'src/components/**/*.css'
    ])
	.pipe(concat('primereact.css'))
	.pipe(gulp.dest('dist/resources'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(rename('primereact.min.css'))
	.pipe(gulp.dest('dist/resources'));
});

gulp.task('build-themes', function() {
    return gulp.src([
        'public/themes/**/*',
        '!public/themes/soho-*',
        '!public/themes/soho-*/**/*',
        '!public/themes/viva-*',
        '!public/themes/viva-*/**/*',
        '!public/themes/mira',
        '!public/themes/mira/**/*',
        '!public/themes/nano',
        '!public/themes/nano/**/*'
    ])
    //.pipe(uglifycss({"uglyComments": true}))
    .pipe(gulp.dest('dist/resources/themes'));
})

gulp.task('images', function() {
    return gulp.src(['src/components/**/images/*.png', 'src/components/**/images/*.gif'])
        .pipe(flatten())
        .pipe(gulp.dest('dist/resources/images'));
});

gulp.task('build-exports', function() {
    return gulp.src(['exports/*.js','exports/*.d.ts'])
        .pipe(gulp.dest('dist'));
});

gulp.task('build-meta', function() {
    return gulp.src(['README.md','LICENSE.md', 'package-build.json'])
        .pipe(rename(function(path) {
            if (path.basename === 'package-build') {
                path.basename = path.basename.replace('package-build', 'package');
            }
        }))
        .pipe(gulp.dest('dist'));
});

//Building project with run sequence
gulp.task('build-resources', gulp.series('build-css','images', 'build-themes', 'build-meta'));

