# Сборка Gulp
___

## Содержание

1. [Возможности сборки ](#buildDescription)
2. [Инструкция по использованию](#buildStart)
2. [Использованные плагины](#plagins)
3. [Список задач](#task)
4. [Файловая система](#file)
5. [Заключение](#end)

___

## <a id="buildStart">__Инструкция по использованию__</a>

Перед начало работы необходимо установить все плагины. Для этого нужно воспользоваться этой командой:

    npm i

или

    npm install

Работа плагина разделена на 2 этапа:
1. __Разработка макета:__

На этом этапе мы верстаем макет. Не будет создана папка "dist". Нет обработки HTML и JavaScript кода. Обрабатываются только CSS, изображения и шрифты. Для запуска используется команда:

    gulp buildStart

Запускается поочерёдное выполнение задач: styles, images, fonts. Затем параллельно выполняются browsersync, watching.

2. __Подготовка макет к публикации__

На этом этапе верстка подготавливается к публикации. Осуществляется обработка HTML и JavaScript. Повторно выполняются обработки CSS, изображений и шрифтоы. Для запуска используется команда:

    gulp buildLayout

Запускается поочерёдное выполнение задач: cleanDist, htmtIndex, htmtPages, styles, scripts, images, fonts.

__ВАЖНО!__
Перед выполнением команды изменить значение атрибута "src" у тега "script" для подключения обработанного JavaScript кода. 

Как должно быть:
     
    <script type="module" src="scripts/main.min.js"></script>

Атрибут "type" не обязателен.
___

## <a id="buildDescription">__Возможности сборки__</a>

+ Минификация HTML, CSS, JavaScript.
+ Конвертирование изображений в формат WEBP
+ Автопрефиксер JavaScript и CSS
+ Использование CSS препроцессора SASS (SCSS)
+ Стартовый шаблон
+ Локальный сервер с автообновлением при внесении изменений в файлах проекта
___

## <a id="plagins">__Использованные плагины__</a>


### <a id="gulp">__1. Gulp__</a>

Версия пакета: 4.0.2
[Станица на npmjs](https://www.npmjs.com/package/gulp)
[Официальный сайт](https://gulpjs.com/)
[Github](https://github.com/gulpjs/gulp)

Команда для установки:
    
    npm i gulp

### <a id="gulpAutoprefixer">__2. Gulp-autoprefixer__</a>

Версия пакета: 8.0.0
[Станица на npmjs](https://www.npmjs.com/package/gulp-autoprefixer)
[Github](https://github.com/sindresorhus/gulp-autoprefixer)

Команда для установки:
    
    npm i gulp-autoprefixer

### <a id="gulpConcat">__3. Gulp-concat__</a>

Версия пакета: 2.6.1
[Станица на npmjs](https://www.npmjs.com/package/gulp-concat)
[Github](https://github.com/gulp-community/gulp-concat)

Команда для установки:
    
    npm i gulp-concat

### <a id="gulpSass">__4. Gulp-sass__</a>

Версия пакета: 5.1.0
[Станица на npmjs](https://www.npmjs.com/package/gulp-sass)
[Github](https://github.com/dlmanning/gulp-sass)

Команда для установки:
    
    npm i gulp-sass

### <a id="gulpUglify">__5. Gulp-uglify__</a>

Версия пакета: 3.0.2
[Станица на npmjs](https://www.npmjs.com/package/gulp-uglify)
[Github](https://github.com/terinjokes/gulp-uglify)

Команда для установки:
    
    npm i gulp-uglify

### <a id="gulpWebp">__6. Gulp-webp__</a>

Версия пакета: 4.0.1
[Станица на npmjs](https://www.npmjs.com/package/gulp-webp)
[Github](https://github.com/sindresorhus/gulp-webp#readme)

Команда для установки:
    
    npm i gulp-webp

### <a id="gulpHtmlmin">__7. Gulp-htmlmin__</a>

Версия пакета: 5.0.1
[Станица на npmjs](https://www.npmjs.com/package/gulp-htmlmin)
[Github](https://github.com/jonschlinkert/gulp-htmlmin)

Команда для установки:
    
    npm i gulp-htmlmin

### <a id="browserSync">__8. Browser-sync__</a>

Версия пакета: 2.27.10
[Станица на npmjs](https://www.npmjs.com/package/browser-sync)
[Официальный сайт](https://browsersync.io/)
[Github](https://github.com/BrowserSync/browser-sync)

Команда для установки:
    
    npm i browser-sync

### <a id="del">__9. Del__</a>

Версия пакета: 6.0.0
[Станица на npmjs](https://www.npmjs.com/search?q=del)
[Github](https://github.com/sindresorhus/del)

Команда для установки:
    
    npm i del

### <a id="sass">__10. Sass__</a>

Версия пакета:  1.54.5
[Станица на npmjs](https://www.npmjs.com/package/sass)
[Github](https://github.com/sass/dart-sass)

Команда для установки:
    
    npm i sass

___

## <a id="task">__Список задач__</a>
+ __buildStart__ - запускает поочерёдное выполнение задач styles и images, затем параллельно выполняются browsersync и watching 
+ __buildLayout__ - запускает поочерёдное выполнение задач: cleanDist, htmtIndex, htmtPages, styles, scripts, images, fonts. Тем самым собирает все обработанные файлы в папку 'dist'.
+ __htmtPages__ - выполняет обработку html файлов (за исключением index.html). Минифицирует файлы и копирует их в папку 'dist'.
+ __htmtIndex__ - выполняет обработку файла index.html. Минифицирует файл и копирует его в папку 'dist'.
+ __fonts__ - копирует все файлы со шрифтами и копирует их в папку 'dist'.
+ __images__ - конвертирует файлы в формат WEBP и копирует их в папки 'dist' и 'source'. Копирование в папку 'source' необходимо для просмотра уже сконвертируемых файлов при запуске локального сервера (browsersync работает с файлами в папке 'source').
+ __browsersync__ - создает локальный сервер. При работе использует файлы из папки 'source'.
+ __scripts__ - обрабатывает JavaScript файлы. Выполняет автопрефис и минификацию файлов. Затем копирует обработанные файлы в папки 'dist' и 'source'.
+ __styles__ - обрабатывает CSS файлы. Выполняет автопрефис, минификацию и преобразванние SASS(SCSS) файлов в CSS. Затем копирует обработанные файлы в папки 'dist' и 'source'.
+ __watching__ - следит за изменениями в файлах SCSS, JavaScript, HTML.
+ __cleanDist__ - очищает папку 'dist'.
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

## <a id="end">__Заключение__</a>

Автор сборки [Karapuchka](https://github.com/Karapuchka)