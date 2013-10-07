# Практика по [БЭМ](http://ru.bem.info) для ШРИ 2013

## Результат

[Собранная рабочая страничка](http://tenorok.github.io/shri-bem-practice/index/)

## Установка:

    git clone git@github.com:tenorok/shri-bem-practice.git
    cd project-stub
    npm install
    ./node_modules/.bin/bem server
    
Уже можно посмотреть готовую страницу: [localhost:8080/desktop.bundles/index/index.html](http://localhost:8080/desktop.bundles/index/index.html)

## Использование BEMTREE

    ./node_modules/.bin/bem make desktop.bundles/app/
    node app.js

Будет запущен express-сервер, который проводит три маршрута:

* [localhost:3000/](http://localhost:3000/)
* [localhost:3000/homer](http://localhost:3000/homer)
* [localhost:3000/otto](http://localhost:3000/otto)

## Материалы

* [Лекции Школы Разработки Интерфейсов Яндекса](http://tech.yandex.ru/education/shri/)
* [Сайт про БЭМ](http://ru.bem.info)
* [БЭМ на гитхабе](http://github.com/bem)
