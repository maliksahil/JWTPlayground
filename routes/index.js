var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next) {  
  var encodedToken = req.body.id_token;
  res.render('index', { encodedToken: encodedToken });
});

module.exports = router;
