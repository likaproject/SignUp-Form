var gulp     = require('gulp');
var sass     = require('gulp-sass');
var nunjucks      = require('gulp-nunjucks-render');
var watch    = require('gulp-watch');
var	minJs    = require('gulp-uglify');
var minCss   = require('gulp-clean-css');
var rename = require("gulp-rename");
var clean = require('gulp-clean');

gulp.task('default', () => {
	gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/scss/*.scss', ['sass']);
	//gulp.watch('dist/css/*.css', ['minCss']);
});
//Build HTML
gulp.task('html', () => {
	gulp.src("./src/index.html")
        .pipe(nunjucks())
        .pipe(gulp.dest("./dist"))
});
//Scss to css
gulp.task('sass', function() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(minCss({compatibility: 'ie8'}))
		.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});
//img for prod
gulp.task('img', () => {
    return gulp.src('src/img/*')
            .pipe(gulp.dest('dist/img'));
});
//Js for prod
gulp.task('minJs', () => {
	return gulp.src('src/js/*.js')
			.pipe(minJs())
			.pipe(gulp.dest('dist/js'));
});
//Remoove dist directory
gulp.task('clean', () => {
	return gulp.src('dist', {read: false})
			.pipe( clean());
});
//Build for prod
gulp.task('build', ['html', 'sass', 'minJs', 'img']);



























