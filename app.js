const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks'); // populates local variables into a template
const routes = require('./routes');


// logging middleware; morgan is ndustry standard
app.use(morgan('dev'));
app.use('/', routes);
app.use(express.static('public'))
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates


app.listen(3000, function(){
  console.log('app is listening');
})
