var express = require('express'),
    app = express(),
    http = require('http');

app.use(express.static(__dirname + '/desktop.bundles/app'));

var server = http.createServer(app);

var BEMHTML = require('./desktop.bundles/app/_app.bemhtml.js').BEMHTML,
    BEMTREE = require('./desktop.bundles/app/app.bemtree.js').BEMTREE;

function response(res) {
    BEMTREE.apply().then(function(bemjson) {
        res.send(BEMHTML.apply(bemjson));
    });
}

['/', '/otto', '/homer'].forEach(function(route) {
    app.get(route, function(req, res) {
        BEMTREE.route = route;
        response(res);
    });
});

server.listen(3000, function() {
    console.log('Express server listening on port 3000');
});
