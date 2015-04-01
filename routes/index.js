var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(404);
  res.render('index', {
    title: '404 Error Not Found'
  , word1: 'What. '
  , word2: "You don't believe me?"
  , word3: 'Well screw you too.'
  });
});

module.exports = router;
