var express = require('express');
var router = express.Router();
const tasks = [
  {
    title: 'title1',
    id: 'id1',
    completed: true
  },
  {
    title: 'title2',
    id: 'id2',
    completed: false
  }
]

// router.post('/', function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     console.log(2, req);
//     res.send('POST request to the homepage');
// });

router.post('/', function(req, res, next) {
  console.log(1, req.body);
});

router.get('/', function(req, res, next) {
    // console.log(1, req.body);
    res.json(tasks);
});

module.exports = router;
