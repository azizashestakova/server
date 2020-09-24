// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.json(req);
// });

// module.exports = router;


var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    console.log(1, req.body);
    res.send('POST request to the homepage');
//   console.log(req.body);
//   console.log(req.body.task.id);
  // res.send('respond with a resource');
});

module.exports = router;
