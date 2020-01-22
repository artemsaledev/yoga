let uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    scriptsPATH = {
        "input": "./dev/static/js/",
        "ouput": "./build/static/js/"
    };

module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src([
            'node_modules/fancybox/dist/js/jquery.fancybox.pack.js',
            'node_modules/fancybox/lib/jquery.mousewheel.pack.js',
            'node_modules/fancybox/dist/helpers/js/jquery.fancybox-buttons.js',
            'node_modules/fancybox/dist/helpers/js/jquery.fancybox-media.js',
            'node_modules/fancybox/dist/helpers/js/jquery.fancybox-thumbs.js',
            'node_modules/slick-carousel/slick/slick.min.js',
            'node_modules/jquery-validation/dist/jquery.validate.min.js',
            'dev/static/js/jquery.formstyler.min.js'])
            .pipe(concat('libs.min.js'))
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src([
            'node_modules/fancybox/dist/js/jquery.fancybox.pack.js',
            'node_modules/fancybox/lib/jquery.mousewheel.pack.js',
            'node_modules/fancybox/dist/helpers/js/jquery.fancybox-buttons.js',
            'node_modules/fancybox/dist/helpers/js/jquery.fancybox-media.js',
            'node_modules/fancybox/dist/helpers/js/jquery.fancybox-thumbs.js',
            'node_modules/slick-carousel/slick/slick.min.js',
            'node_modules/jquery-validation/dist/jquery.validate.min.js',
            'dev/static/js/jquery.formstyler.min.js'])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });

    $.gulp.task('js:build-min', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });
};
