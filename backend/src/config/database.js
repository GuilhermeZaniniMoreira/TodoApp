const mongoose = require('mongoose')
mongoose.Primise = global.Promise // utilizar API de promiise do Node

module.exports = mongoose.connect('mongodb://localhost/todo')