# Сборка Gulp
___

## Содержание

1. [Возможности сборки ](#buildDescription)
2. [Использованные плагины](#plagins)
3. [Список задач](#task)
4. [Файловая система](#file)
5. [Заключение](#end)

___

## Возможности сборки <a id="buildDescription"></a>

+ Минификация HTML, CSS, JavaScript.
+ Конвертирование изображений в формат WEBP
+ Автопрефиксер JavaScript и CSS
+ Использование CSS препроцессора SASS (SCSS)
+ Стартовый шаблон
+ Локальный сервер с автообновлением при внесении изменений в файлах проекта
___

## Использованные плагины <a id="plagins"></a>


### 1. Gulp <a id="gulp"></a>

Версия пакета: 4.0.2
[Станица на npmjs](https://www.npmjs.com/package/gulp)
[Официальный сайт](https://gulpjs.com/)
[Github](https://github.com/gulpjs/gulp)

Команда для установки:
    
    npm i gulp

### 2. Gulp-autoprefixer <a id="gulpAutoprefixer"></a>

Версия пакета: 8.0.0
[Станица на npmjs](https://www.npmjs.com/package/gulp-autoprefixer)
[Github](https://github.com/sindresorhus/gulp-autoprefixer)

Команда для установки:
    
    npm i gulp-autoprefixer

### 3. Gulp-concat <a id="gulpConcat"></a>

Версия пакета: 2.6.1
[Станица на npmjs](https://www.npmjs.com/package/gulp-concat)
[Github](https://github.com/gulp-community/gulp-concat)

Команда для установки:
    
    npm i gulp-concat

### 4. Gulp-sass <a id="gulpSass"></a>

Версия пакета: 5.1.0
[Станица на npmjs](https://www.npmjs.com/package/gulp-sass)
[Github](https://github.com/dlmanning/gulp-sass)

Команда для установки:
    
    npm i gulp-sass

### 5. Gulp-uglify <a id="gulpUglify"></a>

Версия пакета: 3.0.2
[Станица на npmjs](https://www.npmjs.com/package/gulp-uglify)
[Github](https://github.com/terinjokes/gulp-uglify)

Команда для установки:
    
    npm i gulp-uglify

### 6. Gulp-webp <a id="gulpWebp"></a>

Версия пакета: 4.0.1
[Станица на npmjs](https://www.npmjs.com/package/gulp-webp)
[Github](https://github.com/sindresorhus/gulp-webp#readme)

Команда для установки:
    
    npm i gulp-webp

### 7. Gulp-htmlmin <a id="gulpHtmlmin"></a>

Версия пакета: 5.0.1
[Станица на npmjs](https://www.npmjs.com/package/gulp-htmlmin)
[Github](https://github.com/jonschlinkert/gulp-htmlmin)

Команда для установки:
    
    npm i gulp-htmlmin

### 8. Browser-sync <a id="browserSync"></a>

Версия пакета: 2.27.10
[Станица на npmjs](https://www.npmjs.com/package/browser-sync)
[Официальный сайт](https://browsersync.io/)
[Github](https://github.com/BrowserSync/browser-sync)

Команда для установки:
    
    npm i browser-sync

### 9. Del <a id="del"></a>

Версия пакета: 6.0.0
[Станица на npmjs](https://www.npmjs.com/search?q=del)
[Github](https://github.com/sindresorhus/del)

Команда для установки:
    
    npm i del

### 10. Sass <a id="sass"></a>

Версия пакета:  1.54.5
[Станица на npmjs](https://www.npmjs.com/package/sass)
[Github](https://github.com/sass/dart-sass)

Команда для установки:
    
    npm i sass

___

## Список задач <a id="task"></a>
+ gulp - стандартная команда в gulp. Используется для запуска сборки.
+ build - запускает параллельно выполнение команд: htmtIndex, htmtPages, styles, scripts, images, fonts. Тем самым собирает все обработанные файлы в папку 'dist'.
+ htmtPages - выполняет обработку html файлов (за исключением index.html). Минифицирует файлы и копирует их в папку 'dist'.
+ htmtIndex - выполняет обработку файла index.html. Минифицирует файл и копирует его в папку 'dist'.
+ fonts - копирует все файлы со шрифтами и копирует их в папку 'dist'.
+ images - конвертирует файлы в формат WEBP и копирует их в папки 'dist' и 'source'. Копирование в папку 'source' необходимо для просмотра уже сконвертируемых файлов при запуске локального сервера (browsersync работает с файлами в папке 'source').
+ browsersync - создает локальный сервер. При работе использует файлы из папки 'source'.
+ scripts - обрабатывает JavaScript файлы. Выполняет автопрефис и минификацию файлов. Затем копирует обработанные файлы в папки 'dist' и 'source'.
+ styles - обрабатывает CSS файлы. Выполняет автопрефис, минификацию и преобразванние SASS(SCSS) файлов в CSS. Затем копирует обработанные файлы в папки 'dist' и 'source'.
+ watching - следит за изменениями в файлах SCSS, JavaScript, HTML.
+ cleanDist - очищает папку 'dist'.
___

## Файловая структура <a id="file"></a>

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
+ dist - каталог в котором храняться уже обработанные файлы.
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

## Заключение <a id="end"></a>

Автор сборки [Karapuchka](https://github.com/Karapuchka)