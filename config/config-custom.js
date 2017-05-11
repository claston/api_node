var express = require('express');
var consign = require('consign');
var path = require('path');



var bodyParser = require('body-parser');

var virtualDirPath = process.env.virtualDirPath || '';

module.exports = function (){

    var app = express();

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();
    });

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.static('./public'));
    //app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());

    app.virtualDirPath = virtualDirPath;

    app.get(virtualDirPath + '/', function(req, res) {
      res.sendFile(path.join(__dirname, '../public', 'indexio.html')); // load the single view file (angular will handle the //page changes on the front-end)
        //res.render('index', { virtualDirPath: virtualDirPath });
    });

    consign()

      
        .include('services')
       // .include('sales')
        .then('persistencia')
        //.then('configEntidade')   
        .into(app);

    return app;
}