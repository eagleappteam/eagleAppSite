var app = require('./config/express')();
require('./config/conect')

app.listen(3000, function(){
    console.log('Server Online');

})
