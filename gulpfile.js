'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    flatten = require('gulp-flatten');

gulp.task('build-css', function () {
    return gulp.src([
            'src/components/common/Common.css',
            'src/components/**/*.css'
        ])
        .pipe(concat('primereact.css'))
        .pipe(gulp.dest('dist/resources'))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(rename('primereact.min.css'))
        .pipe(gulp.dest('dist/resources'));
});

gulp.task('build-themes', function () {
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

gulp.task('images', function () {
    return gulp.src(['src/components/**/images/*.png', 'src/components/**/images/*.gif'])
        .pipe(flatten())
        .pipe(gulp.dest('dist/resources/images'));
});

gulp.task('build-exports', function () {
    return gulp.src(['exports/*.js', 'exports/*.d.ts'])
        .pipe(gulp.dest('dist'));
});

gulp.task('build-meta', function () {
    return gulp.src(['README.md', 'LICENSE.md', 'package-build.json'])
        .pipe(rename(function (path) {
            if (path.basename === 'package-build') {
                path.basename = path.basename.replace('package-build', 'package');
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-css', function () {
    return gulp.src([
            'src/components/**/Common.css',
            'src/components/**/*.css'
        ])
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(rename(function (path) {
            path.basename = path.basename.toLowerCase();
            path.extname = '.min' + path.extname;
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-d.ts', function () {
    return gulp.src('src/components/**/*.d.ts')
        .pipe(rename(function (path) {
            path.basename = path.basename.toLowerCase();
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-package.json', function () {
    return gulp.src('src/components/**/package.json')
        .pipe(gulp.dest('./dist'));
});

//Building project with run sequence
gulp.task('copy-files', gulp.series('copy-css', 'copy-d.ts', 'copy-package.json'));
gulp.task('build-resources', gulp.series('build-css', 'images', 'build-themes', 'build-meta', 'copy-files'));
