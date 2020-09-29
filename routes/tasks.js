var express = require('express');
var router = express.Router();
var saveTasks = require('../data/tasks.js');
var tasks = require('../data/tasks.json');

router.use(express.static('data'));

router.post('/', function(req, res, next) {
  tasks = req.body;
});

router.get('/', function(req, res, next) {
  saveTasks(tasks, function(err) {
    if (err) {
      res.status(404).send('Tasks not saved');
      return;
    }
    res.json(tasks);
  });
});


module.exports = router;
