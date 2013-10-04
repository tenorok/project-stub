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
            mix: { block: 'clearfix' },
            content: [
                {
                    elem: 'photo',
                    content: 'http://jing.yandex-team.ru/files/tenorok/screen01_2013-10-04_15-36-22.png'
                },
                {
                    elem: 'group',
                    content: 'семья'
                },
                {
                    elem: 'info',
                    content: [
                        {
                            elem: 'name',
                            content: 'Гомер Симпсон'
                        },
                        {
                            elem: 'phone',
                            content: {
                                block: 'button',
                                mix: { block: 'contact', elem: 'phone-button' },
                                content: '+7 987 456-71-28'
                            }
                        },
                        {
                            elem: 'address',
                            content: 'Спрингфилд, 36'
                        },
                        {
                            elem: 'email',
                            content: {
                                block: 'link',
                                url: 'mailto:homer@yandex.ru',
                                content: 'homer@yandex.ru'
                            }
                        },
                        {
                            elem: 'more',
                            content: [
                                {
                                    elem: 'details',
                                    content: [
                                        {
                                            elem: 'detail',
                                            field: 'День рождения',
                                            value: '1 января 1970'
                                        },
                                        {
                                            elem: 'detail',
                                            field: 'Место работы',
                                            value: 'АЭС'
                                        },
                                        {
                                            elem: 'detail',
                                            field: 'Отдел',
                                            value: 'Департамент утечек атомного реагента'
                                        },
                                        {
                                            elem: 'detail',
                                            field: 'Должность',
                                            value: 'Специалист по безопасности'
                                        }
                                    ]
                                },
                                {
                                    elem: 'links',
                                    content: [
                                        {
                                            elem: 'social',
                                            mods: { service: 'facebook' },
                                            content: 'facebook',
                                            url: 'https://www.facebook.com/pages/Homer-Simpson/109386305754801'
                                        },
                                        {
                                            elem: 'social',
                                            mods: { service: 'vkontakte' },
                                            content: 'vkontakte'
                                        },
                                        {
                                            elem: 'social',
                                            mods: { service: 'twitter' },
                                            content: 'twitter'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
