module.exports = function(){
    var mongoose = require('mongoose');

    return  mongoose.connect('mongodb://localhost/eagleAppDB');
}