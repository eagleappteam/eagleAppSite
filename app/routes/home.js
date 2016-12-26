module.exports = function(app){
     db = require('../models/eagleAppDB');

     app.post('/eagleAppDB', function(req, res){
         var collection = new db({nome : 'elkerton'})
         collection.save(function(err){
             if(!err){
                 res.json(err);
             }
         })
     })    

     app.get('/eagleAppDB', function(req,res){
        

        db.find({}).exec((err, data) => {
        if(!err)
            res.json(data);
        else
            res.json(err);
    });
        
     })  
}