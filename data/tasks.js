var fs = require('fs');

function saveTasks(tasks, callback) {
    console.log(tasks);
    fs.writeFile('./data/tasks.json', JSON.stringify(tasks, null, '\t'), callback);
}

module.exports = saveTasks;