const express = require('express');
const router = express.Router();

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true} );
  next();
});

router.get('/users/:name', function(req, res, next) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, showForm: true, username: req.params.name } );
  next();
});

router.get('/tweets/:id', function(req, res, next) {
  var tweetId = req.params.id * 1;
  var tweetWeFound = tweetBank.find( {id: tweetId })
  res.render( 'index', { tweets: tweetWeFound });
  next();
})

router.post('/tweets', function(req, res, next) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
  next();
});

module.exports = router;
