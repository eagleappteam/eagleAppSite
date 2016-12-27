var app = require('./config/express')();
require('./config/conect')

app.listen(3001, function(){
    console.log('Server Online');

})
