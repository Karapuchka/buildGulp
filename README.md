# Сборка Gulp
___

## Содержание

1. [Возможности сборки ](#buildDescription)
2. [Инструкция по использованию](#buildStart)
3. [Использованные плагины](#plagins)
4. [Список задач](#task)
5. [Файловая система](#file)
6. [Заключение](#end)

___

## <a id="buildStart">__Инструкция по использованию__</a>

Перед начало работы необходимо установить все плагины. Для этого нужно воспользоваться этой командой:

    npm i

или

    npm install

Далее запускаем сборку используя команду:

    gulp start

__Важно!__
Если в работе вы создаёте несколько js файлов, то необходимо прописать пути к этим файлам в задаче "scripts":

    function scripts(){
    return src([

            //Здесь небходимо указать путь к файлу

            'source/scripts/main.js',  
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/scripts'))
        .pipe(browserSync.stream())
    }

Файл "main.js" необходимо указывать последним. Так как в нем написан основной скрипт.
___

## <a id="buildDescription">__Возможности сборки__</a>

+ Использование CSS препроцессора SASS (SCSS).
+ Конвертирование изображений в формат WEBP.
+ Минификация HTML, CSS, JavaScript.
+ Автопрефиксер JavaScript и CSS.
+ Стартовый шаблон
___

## <a id="plagins">__Использованные плагины__</a>


### 1. Gulp

Версия пакета: 4.0.2
[Станица на npmjs](https://www.npmjs.com/package/gulp)
[Официальный сайт](https://gulpjs.com/)
[Github](https://github.com/gulpjs/gulp)

Команда для установки:
    
    npm i gulp

### 2. Gulp-autoprefixer

Версия пакета: 8.0.0
[Станица на npmjs](https://www.npmjs.com/package/gulp-autoprefixer)
[Github](https://github.com/sindresorhus/gulp-autoprefixer)

Команда для установки:
    
    npm i gulp-autoprefixer

### 3. Gulp-concat

Версия пакета: 2.6.1
[Станица на npmjs](https://www.npmjs.com/package/gulp-concat)
[Github](https://github.com/gulp-community/gulp-concat)

Команда для установки:
    
    npm i gulp-concat

### 4. Gulp-sass

Версия пакета: 5.1.0
[Станица на npmjs](https://www.npmjs.com/package/gulp-sass)
[Github](https://github.com/dlmanning/gulp-sass)

Команда для установки:
    
    npm i gulp-sass

### 5. Gulp-uglify

Версия пакета: 3.0.2
[Станица на npmjs](https://www.npmjs.com/package/gulp-uglify)
[Github](https://github.com/terinjokes/gulp-uglify)

Команда для установки:
    
    npm i gulp-uglify

### 6. Gulp-webp

Версия пакета: 4.0.1
[Станица на npmjs](https://www.npmjs.com/package/gulp-webp)
[Github](https://github.com/sindresorhus/gulp-webp#readme)

Команда для установки:
    
    npm i gulp-webp

### 7. Gulp-htmlmin

Версия пакета: 5.0.1
[Станица на npmjs](https://www.npmjs.com/package/gulp-htmlmin)
[Github](https://github.com/jonschlinkert/gulp-htmlmin)

Команда для установки:
    
    npm i gulp-htmlmin

### 8. Browser-sync

Версия пакета: 2.27.10
[Станица на npmjs](https://www.npmjs.com/package/browser-sync)
[Официальный сайт](https://browsersync.io/)
[Github](https://github.com/BrowserSync/browser-sync)

Команда для установки:
    
    npm i browser-sync

### 9. Del

Версия пакета: 6.0.0
[Станица на npmjs](https://www.npmjs.com/search?q=del)
[Github](https://github.com/sindresorhus/del)

Команда для установки:
    
    npm i del

### 10. Sass

Версия пакета:  1.54.5
[Станица на npmjs](https://www.npmjs.com/package/sass)
[Github](https://github.com/sass/dart-sass)

Команда для установки:
    
    npm i sass

### 11. Gulp-imagemin

Версия пакета:  7.1.0
[Станица на npmjs](https://www.npmjs.com/package/gulp-imagemin)
[Github](https://github.com/sindresorhus/gulp-imagemin)

Команда для установки:
    
    npm i gulp-imagemin
___

## <a id="task">__Список задач__</a>
+ __browsersync__ - создает локальный сервер. При работе использует файлы из папки 'dist'.
+ __cleanDist__   - очищает папку 'dist'.
+ __watching__    - следит за изменениями в файлах SCSS, JavaScript, HTML.
+ __imgWebp__     - конвертирует файлы в формат WEBP и копирует их в папки 'dist'.
+ __scripts__     - обрабатывает JavaScript файлы. Выполняет автопрефис и минификацию файлов. Затем копирует обработанные файлы в папку 'dist'.
+ __styles__      - обрабатывает CSS файлы. Выполняет автопрефис, минификацию и преобразванние SASS(SCSS) файлов в CSS. Затем копирует обработанные файлы в папку 'dist'.
+ __images__      - сжимает изображения и копирует их в папку 'dist'.
+ __start__       - запускает все нижеперечисленные задачи.
+ __fonts__       - копирует все файлы со шрифтами и копирует их в папку 'dist'.
+ __htmt__        - выполняет обработку HTML файлов. Минифицирует их и копирует в папку 'dist'.

___

## <a id="file">__Файловая структура__</a>

```
|- dist
|- source
|       |- fonts
|       |- images
|       |- pages
|       |- scripts
|       |       |- main.js
|       |- styles
|       |       |- nullstyles.scss
|       |       |- style.scss
|       |- index.html
|- gulpfile.js
|- package.json

```
+ dist - каталог в котором хранятся уже обработанные файлы.
+ source - основной каталог, в котором храниться весь код перед обработкой.
+ fonts - каталог, в котором храняться все подключенные шрифты.
+ images - каталог, в котором храняться все изображения.
+ pages - каталог, в котором храняться все HTML файлы (за исключением index.html).
+ scripts - каталог, в котором храняться все JavaScript файлы.
+ main.js - основной JavaScript файл. В котором прописывается основной скрипт.
+ styles - каталог, в котором храняться все SASS(SCSS) и CSS файлы.
+ nullstyle.scss - SASS(SCSS) файл. Необходим для обнуления стандартных стилей страницы. 
+ style.scss - основной SASS(SCSS) файл. В котором прописывается основная таблица стилей.
+ index.html - основной HTML файл.
+ gulpfile.js - файл с задачами сборки.
+ package.json - файл с настройками проекта и списком всех задач.

___

## <a id="end">__Заключение__</a>

Автор сборки [Karapuchka](https://github.com/Karapuchka)
