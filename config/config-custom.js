var express = require('express');
var consign = require('consign');

var bodyParser = require('body-parser');

module.exports = function (){

    var app = express();

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.static('./public'));
    app.use(bodyParser.json());

     app.get('/', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    consign()
        .include('services')
        .include('sales')
        .then('persistencia')
        .then('configEntidade')   
        .into(app);

    return app;
}