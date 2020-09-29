var fs = require('fs');

function saveTasks(tasks, callback) {
    fs.writeFile('./data/tasks.json', JSON.stringify(tasks), callback);
}

module.exports = saveTasks;