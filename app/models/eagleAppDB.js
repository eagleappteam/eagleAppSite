var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = function(){
    var planoSites = new Schema({
        nome : String,
        // preco : Integer,
        // qtdPaginas : Integer,
        descricao : String,
        createdIn : { type: Date, default : Date.now()},
        done : { type : Boolean, default : false}
    });

    return mongoose.model('eagleAppDB', planoSites);

}();