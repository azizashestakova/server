var fs = require('fs');

module.exports.saveTasks = function(tasks, callback) {
    fs.writeFile('./data/tasks.json', JSON.stringify(tasks, null, '\t'), callback);
}

module.exports.getTasks = function(callback) {
    fs.readFile('./data/tasks.json', 'utf8', callback);
}
