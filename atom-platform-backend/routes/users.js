var express = require('express');
var router = express.Router();

var j = require('../channel.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(j);
});

module.exports = router;
