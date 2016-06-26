//Gulp Variables
var gulp = require('gulp');
	sass = require('gulp-sass');
	livereload = require("gulp-livereload");
	connect = require("gulp-connect");
	jshint = require("gulp-jshint");
	rename = require('gulp-rename');
	minifyCss = require('gulp-minify-css');
	autoprefixer = require('gulp-autoprefixer');

//Server task
gulp.task("serve", function(event){
	connect.server({
		root:"",
		port:1988,
		livereload:true
	});
});

// Styles Task
gulp.task('styles', function (){
	gulp.src('sass/**/styles.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
					browsers: ['last 2 versions'],
					cascade: false
				}))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCss())
		.pipe(gulp.dest('css/'))
		.pipe(connect.reload());
});

//HTML Task
gulp.task("html", function(){
	gulp.src("./*.html")
		.pipe(connect.reload())
})

//JS Lint Task
gulp.task("lint", function(){
	gulp.src("js/*.js")
	.pipe(jshint())
	.pipe(jshint.reporter("default"))
	.pipe(connect.reload());
})

//Watch Task
gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('./*.html', ['html']);
	gulp.watch('js/*.js', ['lint']);
});

//Serve it up!
gulp.task('default', ['serve', 'styles', 'html', 'watch']);