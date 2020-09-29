var express = require('express');
var router = express.Router();
let tasks = [];

router.post('/', function(req, res, next) {
  tasks = req.body;
});

router.get('/', function(req, res, next) {
    res.json(tasks);
});

module.exports = router;
