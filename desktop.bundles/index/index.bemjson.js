({
    block: 'page',
    title: 'Контакты',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false }
    ],
    content:[
        {
            block: 'contact',
            photo: 'http://jing.yandex-team.ru/files/tenorok/screen01_2013-10-04_15-36-22.png',
            group: 'семья',
            name: 'Гомер Симпсон',
            phone: '+7 987 456-71-28',
            address: 'Спрингфилд, 36',
            email: 'homer@yandex.ru',
            details: [
                [ 'День рождения', '1 января 1970' ],
                [ 'Место работы', 'АЭС' ],
                [ 'Отдел', 'Департамент утечек атомного реагента' ],
                [ 'Должность', 'Специалист по безопасности' ]
            ],
            social: {
                facebook: 'https://www.facebook.com/pages/Homer-Simpson/109386305754801',
                twitter: 'https://twitter.com/HomerJSimpson',
                vkontakte: 'http://vk.com/id117179044'
            }
        },
        { elem: 'js', url: '_index.js' }
    ]
})
