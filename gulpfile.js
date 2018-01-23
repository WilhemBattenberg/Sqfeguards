var gulp = require('gulp');
var nested = require ('postcss-nested');
var processorsArray = 	require('autoprefixer')();
var short = require('postcss-short');
var postcss = require('gulp-postcss');
var assets =require('postcss-assets');	
	var processors = [processorsArray,nested,short];

	gulp.task('styles', function () {
		return gulp.src('work__css/*.css')  //Откуда
			.pipe(postcss(processors))
			.pipe(gulp.dest('src/styles')) //Куда
});



gulp.task('default', () => {
	gulp.watch('work__css/*.css', ['styles']);
});