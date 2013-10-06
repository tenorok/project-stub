var express = require('express'),
    app = express(),
    http = require('http');

app.use(express.static(__dirname + '/desktop.bundles/app'));
app.use(express.static(__dirname));

var server = http.createServer(app);

var BEMHTML = require('./desktop.bundles/app/_app.bemhtml.js').BEMHTML,
    BEMTREE = require('./desktop.bundles/app/app.bemtree.js').BEMTREE;

function response(req, res) {
    BEMTREE.apply().then(function(bemjson) {
        res.send(req.params.ext === 'bemjson'?
            '<pre>' + JSON.stringify(bemjson, null, 4) + '</pre>' :
            BEMHTML.apply(bemjson)
        );
    });
}

['/', '/otto', '/homer'].forEach(function(route) {
    app.get(route + '.:ext?', function(req, res) {
        BEMTREE.route = route;
        response(req, res);
    });
});

server.listen(3000, function() {
    console.log('Express server listening on port 3000');
});
