module.exports = function(app){
  app.get('/templates', function(req, res){
      res.render('templates');
  })
}
