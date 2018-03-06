const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', function(req, res){
  res.send('Welcome!!!!!!!!!!!');
})

app.get('/news', function(req, res){
  res.send('NEWS!!!!!!!!!!!!');
});


app.listen(3000, function(){
  console.log('app is listening');
})
