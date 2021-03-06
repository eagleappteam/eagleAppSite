var express = require('express');
var consign = require('consign');

module.exports = function(){
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.set('view options', {layout: false}); 
    app.use('/static', express.static('static'));


    consign({cwd : 'app'})
        .include('models')
        //.then('infra')
        .then('routes')
        .into(app);

    return app;
}
