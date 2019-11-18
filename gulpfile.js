const {src , dest , series, task}= require('gulp');
const del = require('del');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;


function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ './dist/**' ]);
}


function css(){

return gulp.src('./src/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dist'));

}


function js(){

return src(['./src/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());

}

function babeljs(fn){
fn()
gulp.src('./src/*.js')
	.pipe(babel({
		presets: ['@babel/preset-env']
	}))
	.pipe(gulp.dest('./dist'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist'))

}


exports.clean = clean;
exports.css = css;
exports.js = js
exports.babeljs = babeljs
exports.default = series(clean, js , css, babeljs);


