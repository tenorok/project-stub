# Практика по [БЭМ](http://ru.bem.info) для ШРИ 2013

## Результат

[http://tenorok.github.io/shri-bem-practice/index/](Собранная рабочая страничка)

## Установка:

    git clone git@github.com:tenorok/shri-bem-practice.git
    cd project-stub
    npm install
    ./node_modules/.bin/bem server
    
Уже можно посмотреть готовую страницу: [http://localhost:8080/desktop.bundles/index/index.html](http://localhost:8080/desktop.bundles/index/index.html)

## Использование BEMTREE

    ./node_modules/.bin/bem make desktop.bundles/app/
    node app.js

Будет запущен express-сервер, который проводит три маршрута:

* [http://localhost:3000/](/)
* [http://localhost:3000/homer](/homer)
* [http://localhost:3000/otto](/otto)
