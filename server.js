
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/seo', function(req, res){
  res.sendFile(path.join(__dirname, 'views/portfolio-1.html'));
});

app.get('/seoVSsem', function(req, res){
  res.sendFile(path.join(__dirname, 'views/portfolio-2.html'));
});

app.get('/onpageVSoffpage', function(req, res){
  res.sendFile(path.join(__dirname, 'views/portfolio-3.html'));
});

 app.get('/canonical', function(req, res){
  res.sendFile(path.join(__dirname, 'views/portfolio-4.html'));
});

  app.get('/services', function(req, res){
  res.sendFile(path.join(__dirname, 'views/services.html'));
});

 app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, 'views/contact.html'));
});
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});