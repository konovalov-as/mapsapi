API карт 2.0
====

Карты 2GIS — это точные данные обо всех объектах города, включая новостройки, с детализацией до заборов и внутриквартальных проездов.

Для получения более детальной информации об API перейдите на сайт [api.2gis.ru](http://api.2gis.ru).

## Быстрый старт (для разработчиков)
**1. Клонируем репозиторий**
```bash
git clone git@github.com:2gis/maps-api-2.0.git mapsapi-folder
```
Работает с использованием библиотеки [LeafLet 0.6.2](http://leafletjs.com).

**2. Установка окружения**

1. [Node.js](http://nodejs.org/)
2. [GruntJS](http://gruntjs.com/)
3. [PhantomJS](http://phantomjs.org/download.html) (не является обязательным, необходим только для запуска тестов)
4. Устанавливаем зависимости:

    ```bash
    cd ~/mapsapi-folder
    npm install
    ```
[Подробно про установку окружения](https://github.com/yarikos/DG.MapsAPI/wiki/%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-Maps-API-2.0) для разных операционных систем

**3. Сборка приложения**
```bash
grunt build
```

**4. Запуск приложения**
```bash
node app
```

**5. Просмотр результата**

Приложение будет доступно по адресу:

http://127.0.0.1:3000/

## Дальнейшие шаги

Ознакомьтесь с [детальным описанием работы приложения и соглашениями по его разработке](https://github.com/yarikos/DG.MapsAPI/wiki)
