const fs = require('fs')
const path = './data/tasks.json'

module.exports.saveTasks = function(tasks, callback) {
    fs.writeFile('./data/tasks.json', JSON.stringify(tasks, null, '\t'), callback);
}

module.exports.getTasks = function(callback) {
    fs.readFile('./data/tasks.json', 'utf8', callback);
}

module.exports.isExist = function() {
    fs.access(path, fs.F_OK, (err) => { // проверяем существует ли путь до файла
        if (err) { // если нет, то нужно создать
            fs.open(path, 'w', (err) => { // создаем пустой файл
                if(err) throw err;
            });
            
            fs.appendFile(path, '[]', function (err) { // добавляем в файл пустой массив
                if (err) throw err;
            });
        }
    })
}
