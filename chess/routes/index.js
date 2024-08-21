var express = require('express');
const path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Arc tutorial' });
});
/* GET test socket */
router.get('/socket', function(req, res, next) {
  res.render('socket');
});
router.get('/echec', function(req, res, next) {
  res.render('echec');
});
router.get('/taquin', function(req, res, next) {
  res.render('taquin');
});

module.exports = router;
