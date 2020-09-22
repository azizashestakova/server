var express = require('express');
var router = express.Router();

router.get('/:first/:second', function(req, res, next) {
  console.log(req.params);
  
  res.json(req.params);
});

module.exports = router;
