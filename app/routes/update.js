module.exports = function(app){
  app.get('/update', function(req, res){
      res.render('update');
  })
}
