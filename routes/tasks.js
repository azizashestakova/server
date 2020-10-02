const express = require('express');
const router = express.Router();
const tasks = require('../data/tasks.js');

tasks.isExist(); // проверяем существует ли файл tasks.json

router.post('/', function(req, res, next) {
  tasks.saveTasks(req.body, function(err) { // перезаписываем массив с задачами
    if (err) {
      res.status(404).send('Tasks not saved');
      return;
    }
  });
});

router.get('/', function(req, res, next) {
  tasks.getTasks(function(error, data) { // получаем задачи
    if (error) {
      throw error
    };
    res.send(data);
  });
});


module.exports = router;
