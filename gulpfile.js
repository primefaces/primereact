'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    flatten = require('gulp-flatten');

/** @deprecated */
gulp.task('build-css', function () {
    return gulp
        .src([process.env.INPUT_DIR + 'common/Common.css', process.env.INPUT_DIR + '**/*.css'])
        .pipe(concat('primereact.css'))
        .pipe(gulp.dest(process.env.OUTPUT_DIR + 'resources'))
        .pipe(uglifycss({ uglyComments: true }))
        .pipe(rename('primereact.min.css'))
        .pipe(gulp.dest(process.env.OUTPUT_DIR + 'resources'));
});

gulp.task('build-primereactcss', function () {
    return gulp.src(['./styles/primereact.css']).pipe(concat('primereact.css')).pipe(gulp.dest('dist/resources')).pipe(rename('primereact.min.css')).pipe(gulp.dest('dist/resources'));
});

gulp.task('build-themes', function () {
    return (
        gulp
            .src(['public/themes/**/*'])
            //.pipe(uglifycss({"uglyComments": true}))
            .pipe(gulp.dest(process.env.OUTPUT_DIR + 'resources/themes'))
    );
});

/** @deprecated */
gulp.task('images', function () {
    return gulp
        .src([process.env.INPUT_DIR + '**/images/*.png', process.env.INPUT_DIR + '**/images/*.gif'])
        .pipe(flatten())
        .pipe(gulp.dest(process.env.OUTPUT_DIR + 'resources/images'));
});

gulp.task('build-exports', function () {
    return gulp.src(['exports/*.js', 'exports/*.d.ts']).pipe(gulp.dest(process.env.OUTPUT_DIR));
});

gulp.task('build-meta', function () {
    return gulp.src(['README.md', 'LICENSE.md']).pipe(gulp.dest(process.env.OUTPUT_DIR));
});

/** @deprecated */
gulp.task('copy-css', function () {
    return gulp
        .src([process.env.INPUT_DIR + '**/Common.css', process.env.INPUT_DIR + '**/*.css'])
        .pipe(uglifycss({ uglyComments: true }))
        .pipe(
            rename(function (path) {
                path.basename = path.basename.toLowerCase();
                path.extname = '.min' + path.extname;
            })
        )
        .pipe(gulp.dest('./' + process.env.OUTPUT_DIR));
});

gulp.task('copy-d.ts', function () {
    return gulp
        .src(process.env.INPUT_DIR + '**/*.d.ts')
        .pipe(
            rename(function (path) {
                path.basename = path.basename.toLowerCase();
            })
        )
        .pipe(gulp.dest('./' + process.env.OUTPUT_DIR));
});

gulp.task('copy-package.json', function () {
    return gulp.src(process.env.INPUT_DIR + '**/package.json').pipe(gulp.dest('./' + process.env.OUTPUT_DIR));
});

//Building project with run sequence
gulp.task('copy-files', gulp.series('copy-d.ts', 'copy-package.json'));
gulp.task('build-resources', gulp.series('build-primereactcss', 'images', 'build-themes', 'build-meta', 'copy-files'));
