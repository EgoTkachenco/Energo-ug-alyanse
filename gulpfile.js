const gulp = require("gulp"),                     // Сборщик
      sass = require("gulp-sass"),                // SASS
      browserSync = require("browser-sync"),      // Обновления без перезагрузки
      uglify = require("gulp-uglify"),            // минификация - Удаление табов и пробелов
      del = require("del"),                       // Очистка папки
      autoprefixer = require("gulp-autoprefixer"),// Авто префикси
      imagemin = require("gulp-imagemin"),        // Оптимизация изображений
      rigger = require("gulp-rigger")             // Переиспользование кода
      reload = browserSync.reload
      watch = require("gulp-watch"),              // Наблюдение за изменениями в файлах
      sourcemaps = require("gulp-sourcemaps"),
      cssmin = require("gulp-clean-css"),
      rename = require("gulp-rename");            // Переименовать файл
      
const path = {
  build: {
    html: "build",
    js: "build/js/",
    css: "build/css/",
    img: "build/images/",
    fonts: "build/fonts",
  },
  src: {
    html: "src/[^_]*.html",
    js: "src/js/*.js",
    style: "src/scss/*.scss",
    img: "src/images/**/*.{jpg,jpeg,png}",
    fonts: "src/fonts/**/*.*",
  },
  watch: {
    html: "src/**/*.html",
    js: "src/js/**/*.js",
    style: "src/scss/**/*.{scss,css}",
    img: "src/images/**/*.*",
    fonts: "src/fonts/**/*.*",
  },
  clean: "./build",
};

var config = {
  server: {
    baseDir: "./build", //из какой папки показывать
  },
  // tunnel: true,
  host: "localhost",
  port: 3000,
};

// Cборка HTML
gulp.task("html:build", function () {
  gulp
    .src(path.src.html)
    .pipe(rigger()) //проходим через rigger
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({ stream: true })); //перезагружаем сервер
});

// Cборка JS
gulp.task("js:build", function () {
  gulp
    .src(path.src.js)
    .pipe(rigger())
    .pipe(sourcemaps.init()) //инициализация source-map
    .pipe(uglify()) //минификация JS файла
    //.pipe(sourcemaps.write()) //запись source-map
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({ stream: true })); //перезагружаем сервер
});

// Сборка стилей
gulp.task("style:build", function () {
  gulp
    .src(path.src.style)
    .pipe(sourcemaps.init())
    .pipe(sass()) //компиляция sass файла
    .pipe(rename({ suffix: ".min" }))// переименования файла
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 4 versions"], //добавление префиксов для 4-ех последних версия браузеров
      })
    )
    .pipe(cssmin()) //минификация css файла
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({ stream: true })); //перезагружаем сервер
});

// Оптимизация и експорт изображений
gulp.task("image:build", function () {
  gulp
    .src(path.src.img)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest(path.build.img))
    .pipe(reload({ stream: true })); //перезагружаем сервер
});

gulp.task("fonts:build", function () {
  gulp.src(path.src.fonts).pipe(gulp.dest(path.build.fonts)); //шрифты просто копируем
});

// ЗАДАЧА: Собрать проект
gulp.task(
  "build",
  gulp.parallel(
    "html:build",
    "style:build",
    "js:build",
    "fonts:build",
    "image:build"
  )
);

// ЗАДАЧА: Наблюдать за изменениями в файлах
gulp.task("watch", function () {
  watch([path.watch.html], gulp.parallel("html:build"));
  watch([path.watch.style], gulp.parallel("style:build"));
  watch([path.watch.js], gulp.parallel("js:build"));
  watch([path.watch.img], gulp.parallel("image:build"));
  watch([path.watch.fonts], gulp.parallel("fonts:build"));
});

// ЗАДАЧА: Запустить веб-сервер
gulp.task("webserver", function () {
  browserSync(config);
});

// ЗАДАЧА: Очистить папку build
gulp.task("clean", function () {
  del.sync("build");
});

// Сборка проекта командой gulp
gulp.task("default", gulp.parallel("clean", "build", "webserver", "watch"));
