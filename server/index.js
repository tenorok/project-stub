var express = require('express'),
    http = require('http'),
    
    app = express(),

    bundlesDirectory = __dirname + '/../desktop.bundles/index',

    priv    = require(bundlesDirectory + '/_index.priv.js'),
    bemhtml = require(bundlesDirectory + '/_index.bemhtml.js').BEMHTML;

app.use('/index', express.static(bundlesDirectory));

app.get('/', function(req, res){
    res.send(bemhtml.apply(priv['b-page']({
        content: 'Hello world!',
        title: 'Title'
    })));
});

http.createServer(app).listen(3000, function() {
    console.log('Now you can open http://localhost:3000/');
});