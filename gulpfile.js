var gulp          = require('gulp');
var source        = require('vinyl-source-stream');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var rename        = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');


var jsFiles = "app/**/*.js"
var htmlFile = "app/index.html"
var viewFiles = "app/**/*.html"


gulp.task("browserify", ["views"],function(){
    return browserify('./app/app.js')
        .transform(babelify, {presets: ["es2015"]})
        .transform(ngAnnotate)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./build/'))
})

gulp.task("html", function(){
    return gulp.src("app/index.html")
        .pipe(gulp.dest("./build/"))
})


gulp.task('views', function() {
    return gulp.src(viewFiles)
        .pipe(templateCache({
            standalone: true
        }))
        .pipe(rename("app.templates.js"))
        .pipe(gulp.dest('./app/config/'));
});


gulp.task('default', ['html', 'browserify'], function() {

    gulp.watch(viewFiles, ['views']);
    gulp.watch(jsFiles, ['browserify']);
    gulp.watch(htmlFile,['html'])


})
