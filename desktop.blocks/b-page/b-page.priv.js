blocks['b-page'] = function(data) {
    return {
        block: 'b-page',
        title: data.title || '',
        head: [
            { elem: 'css', url: '/index/_index.css', ie: false },
            { elem: 'css', url: '/index/_index', ie: true },
            { elem: 'js',  url: '/index/_index.js' }
        ],
        content: data.content
    };
};