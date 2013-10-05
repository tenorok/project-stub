var express = require('express'),
    app = express(),
    http = require('http');

app.use(express.static(__dirname + '/desktop.bundles/app'));

var server = http.createServer(app);

var BEMHTML = require('./desktop.bundles/app/_app.bemhtml.js').BEMHTML,
    BEMTREE = require('./desktop.bundles/app/app.bemtree.js').BEMTREE;

app.get('/', function(req, res) {
    BEMTREE.apply().then(function(bemjson) {
        res.send(BEMHTML.apply(bemjson));
    });
});

server.listen(3000, function() {
    console.log('Express server listening on port 3000');
});
