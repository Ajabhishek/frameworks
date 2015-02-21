
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var nodemon		= require('nodemon');


gulp.task("nodemon", function(){
	var options = {
		script: './app/app.js',
		watch: './app/'
	};

	return nodemon(options)
		.on("start", function(){
			console.log("nodemon started");
			startBrowserSync();
		})
		.on("restart", function(){
			console.log("nodemon restarted");
		})
})

gulp.task("default", ["nodemon"]);

function startBrowserSync(){
	if(browserSync.active){
		return;
	}
	console.log("browserSync starting");

	var options = {
		proxy: 'localhost:3000',
        port: 4000,
		ghostMode: {
			scroll: true
		},
		browser: ["firefox"],
		files: ["./app/public/css/*.css", "./app/public/*.js", "./app/public/*.html"]
	}
	browserSync(options);		
}