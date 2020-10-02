const express = require('express');
const router = express.Router();
const db = require('../data/db/index.js');

router.post('/', function(req, res, next) {
  db.saveTasks(req.body, function(err) { // перезаписываем массив с задачами
    if (err) {
      res.status(404).send('Tasks not saved');
      return;
    }
  });
});

router.get('/', function(req, res, next) {
  db.getTasks(function(error, data) { // получаем задачи
    if (error) {
      throw error
    };
    res.send(data);
  });
});


module.exports = router;
