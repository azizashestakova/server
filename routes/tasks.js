const express = require('express');
const router = express.Router();
const tasks = require('../data/tasks.js');
const fs = require('fs')
const path = './data/tasks.json'

router.post('/', function(req, res, next) {
  tasks.saveTasks(req.body, function(err) { // перезаписываем массив с задачами
    if (err) {
      res.status(404).send('Tasks not saved');
      return;
    }
  });
});

router.get('/', function(req, res, next) {
  fs.access(path, fs.F_OK, (err) => { // проверяем существует ли путь до файла
    if (err) { // если нет, то нужно создать
      fs.open(path, 'w', (err) => { // создаем пустой файл
        if(err) throw err;
      });
      
      fs.appendFile(path, '[]', function (err) { // добавляем в файл пустой массив
        if (err) throw err;
      });
    }
    tasks.getTasks(function(error, data) { // получаем задачи
      if (error) {
        throw error
      };
      res.send(data);
    });
  })
});


module.exports = router;
