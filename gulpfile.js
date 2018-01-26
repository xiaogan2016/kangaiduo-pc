var gulp = require("gulp");//加载gulp

var babel = require("gulp-babel"); //编译ES6

var sass = require("gulp-sass"); //编译scss

var uglify = require("gulp-uglify"); //压缩JS

var connect = require("gulp-connect");  //即时刷新

var webserver = require("gulp-webserver")

var proxy = require('http-proxy-middleware')

gulp.task("refresh", function(){ //任务名：callback
	gulp.src("./*.html").pipe(connect.reload()); //刷新页面
});

gulp.task("compileJs", function(){ // 处理js文件
	gulp.src("./gulp/jsSource/**/*.js") // 源文件
		.pipe(babel({ 
			presets : ["es2015"] //将ES6转译为ES5
		}))
		//.pipe(uglify()) //压缩
		.pipe( gulp.dest("./js/") ); // 编译后文件存放位置
		console.log('编译es6');
})

gulp.task('compileSass', function () {
    return gulp.src('./gulp/scssSource/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'));
  });

gulp.task("webserver", function () {
	gulp.src('./')
		.pipe(
			webserver({
				host: 'localhost',
                port: 8000,
				livereload: true,
				directoryListing: {
					enable: true,
					path: './'
				},
				middleware:[
					proxy(
						'/api', {
							target:'http://www.360kad.com/',
							changeOrigin: true,
							pathRewrite: {
								'^(/api|/html/api)' : ''
							}
						}	
					),
					proxy(
						'/user', {
							target:'http://user.360kad.com/',
							changeOrigin: true,
							pathRewrite: {
								'^/user': ''
							}
						}	
					)
				]
			})
		)
})

gulp.task("listening", function(){
	//connect.server({ //开启node服务器，默认地址为http://localhost:8080
	//livereload:true //开启热部署
	//});
	gulp.watch("./gulp/scssSource/**/*.scss", ["compileSass"]); //监听：源文件，当源文件改变时执行的任务
	gulp.watch("./html/**/*.html", ["refresh"]); 
	gulp.watch("./gulp/jsSource/**/*.js", ["compileJs"]);
	gulp.watch("./js/modulejs/**/*.js", ["refresh"]); 
})
gulp.task('default', ["listening", "webserver"], function () {
	console.log('done.');
})