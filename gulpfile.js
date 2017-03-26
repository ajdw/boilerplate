var path = require('path');
var gulp = require('gulp');
var gls = require('gulp-live-server');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var clean = require('gulp-clean-css');
var webserver = require('gulp-webserver');
var jade = require('gulp-jade');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var es = require('event-stream');
var plugins = require('gulp-load-plugins')({
        rename: {
            'gulp-live-server': 'serve'
        }
    });
var nodePackage = require('./package.json');
var devhost = 'garagesailors.co';
var localhost = '127.0.0.1';
var port = '8000';

var paths = {
	scripts: 'src/app/**/*.js',
	styles: 'src/**/*.less',
	markup: 'src/jade/**/*.jade'
};

gulp.task('inject', function () {
  var target = gulp.src('public/index.html');
  var sources = gulp.src([
  	'public/**/*.js', 
  	'public/**/*.css'
  	], {read: false});
 	
 	return target.pipe(inject(sources, {
        relative: true,
        addRootSlash: true
    }))

    .pipe(gulp.dest('./public'));
});

gulp.task('build-less', function(){
	return gulp.src('src/**/*.less')
		.pipe(plugins.less())
		.pipe(less({
			paths: [ path.join(__dirname, 'src', 'less') ]
		}))
		.pipe(gulp.dest('./public/css'))
		.pipe(plugins.livereload());
});

gulp.task('bootstrap', function(){
	return gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css')
		.pipe(gulp.dest('./public/css'))
});

gulp.task('build-js', function(){
	gulp.src(['node_modules/angular/angular.min.js',
			'node_modules/angular-route/angular-route.js',
			'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
			'node_modules/angular-animate/angular-animate.js',
			'node_modules/angular-resource/angular-resource.js',
			'node_modules/angular-cookies/angular-cookies.min.js',
            'bower_components/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'bower_components/ngstorage/ngStorage.js',
			'bower_components/lodash/dist/lodash.js',
			'bower_components/angular-simple-logger/dist/angular-simple-logger.js',
			'bower_components/angular-google-maps/dist/angular-google-maps.min.js'])
		.pipe(concat('_dependencies.js'))
		.pipe(gulp.dest('./public/js'))
	gulp.src('src/**/*.js')
		.pipe(concat('application.js'))
		.pipe(gulp.dest('./public/js'))
		.pipe(plugins.livereload());
});

gulp.task('build-html', function() {

 var LOCALS = {};
  
  gulp.src('src/index.jade')
  	.pipe(jade({
  		locals: LOCALS
  	}))
  	.pipe(gulp.dest('./public'))

  gulp.src('src/jade/**/*.jade')
	.pipe(jade({
	  locals: LOCALS
	}))
	.pipe(gulp.dest('./public/html'))
});

gulp.task('start-server',function(){
	gulp.src('./public')
        .pipe(webserver({
            livereload: {
            	enable: true
            },
            open: 'http://' + localhost + ':' + port + '/#/'
        }));
    var server = gls.new('server.js'); 
	server.start();
});

gulp.task('default', ['build-html', 'build-less', 'bootstrap', 'build-js', 'inject', 'start-server']);