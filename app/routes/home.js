var mongoose = require('mongoose');

module.exports = function(app){
    var db = mongoose.model('Planosite')

    app.get('/', function(req,res){

    db.find().exec((err, data) => {
    if(!err){
        res.render('home',{lista:data});

    }
    else
        res.json(err);
    });

 })
}
