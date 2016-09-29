var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render is rendering index.jade and the object that is passed
  //to it is being rendered on the index.jade 
  //so order is what its rendered on and then whats being rendered
  res.render('about', { title: 'About' });
});

module.exports = router;