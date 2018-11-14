const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) // quando mandar atualização já retorne registro atualizado

module.exports = Todo