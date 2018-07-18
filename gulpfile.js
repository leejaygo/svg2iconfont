var gulp = require('gulp'),
iconfont = require('gulp-iconfont'),
iconfontCss = require('gulp-iconfont-css');
gulp.task('iconfont', function () {
    let svg ='./svgs/*.svg';
    let fontName = 'iconfont';
    gulp.src(svg).pipe(iconfontCss({
		fontName: fontName,
		//path: '../dist/template.css', //模板信息的路径
		targetPath: 'font.css', //生成的css样式的路径
		fontPath: './' //生成的iconfont的路径
    })).pipe(iconfont({
		fontName: fontName, // required
		prependUnicode: true, // recommended option
		formats: ['ttf', 'eot', 'woff', 'svg'], // default, 'woff2' and 'svg' are available
		timestamp: new Date().getTime()
	})).pipe(gulp.dest('./dist'));
});
