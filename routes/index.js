const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/news', function(req, res){
  res.send('NEWS!!!!!!!!!!!!');
});

router.get('/stylesheets/style.css', function(req, res){
  res.sendFile('/home/richi/Desktop/twitter_js/public/stylesheets/style.css');
})
module.exports = router;
