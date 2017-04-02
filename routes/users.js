var express = require('express');
var router = express.Router();
const dbsettings = require('../lib/DbSettings')
const knex = require('knex')(dbsettings);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
