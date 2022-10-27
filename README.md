# Сборка Gulp
___

## Содержание
1. [Описание сборки](#buildDescription)
3. [Использованные плагины](#plagins)
4. [Описание работы плагинов](#descriptionPlugins)

___

## Описание сборки <a id="buildDescription"></a>
___

## Использованные плагины <a id="plagins"></a>
1. [browser-sync](#browserSync)
2. [del](#del)
3. [gulp](#gulp)
4. [gulp-autoprefixer](#gulpAutoprefixer)
5. [gulp-concat](#gulpConcat)
6. [gulp-sass](#gulpSass)
7. [gulp-uglify](#gulpUglify)
8. [gulp-webp](#gulpWebp)
9. [sass](#sass)
10. [gulp-htmlmin](#gulpHtmlmin)
___

## Описание работы плагинов <a id="descriptionPlugins"></a>

### Browser-sync <a id="browserSync"></a>
##### Описание:

Версия пакета: 2.27.10
[Станица на npmjs](https://www.npmjs.com/package/browser-sync)
[Официальный сайт](https://browsersync.io/)
[Github](https://github.com/BrowserSync/browser-sync)

##### Процесс установки и настройки:
Для установки плагина через npm используем команду:   

    npm i browser-sync

Затем созданием константу и экспортируем в неё browser-sync:

    const browserSync = require('browser-sync').create();

Далее прописываем задачу. Суть задачи заключается в обновлении сраницы браузера при внесении изменении в файлах проекта:

    function browsersync(){
        browserSync.init({
            server: {
                baseDir: 'source/'
            }
        });
    }


### Del <a id="del"></a>

##### Описание:

Версия пакета: 7.0.0
[Станица на npmjs](https://www.npmjs.com/search?q=del)
[Github](https://github.com/sindresorhus/del)

##### Процесс установки и настройки:
Для установки плагина через npm используем команду: 

    npm i del

Затем созданием константу и экспортируем в неё Del:

    const del = require('del');

Далее прописываем задачу. Суть задачи заключается в удалении файлов или целого католога. В нашем случае это удаление каталога "dist":

    function cleanDist(){
        return del('dist');
    }

### Gulp <a id="gulp"></a>

Версия пакета: 4.0.2
[Станица на npmjs](https://www.npmjs.com/package/gulp)
[Официальный сайт](https://gulpjs.com/)
[Github](https://github.com/gulpjs/gulp)

##### Процесс установки и настройки:
Для установки плагина через npm используем команду: 

    npm i gulp

Затем созданием константы и экспортируем в них Gulp:

    const {src, parallel, series, dest, watch} = require('gulp');

+ Эти константы необходимы для написания логики сборки. 
+ src- Необходим для поиска файлов
+ parallel - необходим для параллельного выполнения задачь 
+ series - необходим для очерёдного выполнения задачь
+ dest - для записи файлов в конкертный каталог
+ watch - для наблюдения за изменениями в файла

### Gulp-autoprefixer <a id="gulpAutoprefixer"></a>

##### Описание:

Версия пакета: 8.0.0
[Станица на npmjs](https://www.npmjs.com/package/gulp-autoprefixer)
[Github](https://github.com/sindresorhus/gulp-autoprefixer)

##### Процесс установки и настройки:
Для установки плагина через npm используем команду: 

    npm i gulp-autoprefixer

Затем созданием константу и экспортируем в неё Gulp-autoprefixer:

    const autoprefixer = require('gulp-autoprefixer');

Этот плагин испозуется для автопрефикса CSS. 
Фрагмент из задачи где используется автопрефикс:

    .pipe(autoprefixer({
        overrideBrowserlist: ['last 10 version'],
        grid: true
    }))

### Gulp-concat <a id="gulpConcat"></a>

### Gulp-sass <a id="gulpSass"></a>

### Gulp-uglify <a id="gulpUglify"></a>

### Gulp-webp <a id="gulpWebp"></a>

### Sass <a id="sass"></a>

### Gulp-htmlmin <a id="gulpHtmlmin"></a>
___

## Заключение
