var mongoose = require('mongoose');

module.exports = function(app){
    var db = mongoose.model('Planoblog')

     app.get('/blog/:id/show', function(req,res){

         var id =  req.params.id;
         var objectid = mongoose.Types.ObjectId(id);
         db.find({_id : objectid}).exec((err, data) => {
             if(!err){
                res.render('blog', {plano : data});
             }else{
                 res.redirect('/')
             }
         })

     })
}
