var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
	var config = {
		server: {
			baseDir: './dev/'
		},
		browser: "google chrome"
	}
	browserSync(config);
});

gulp.task("serve", ["browser-sync"], function(){
	gulp.watch(["./dev/**/*.html", './dev/*.js', './dev/products/**/*'], ["browser-sync", browserSync.reload]);
})