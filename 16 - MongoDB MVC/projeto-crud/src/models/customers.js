const mongoose = require('mongoose')

// Criar uma "collection" no database
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

// Padrão MVC - Model View Controller

// O primeiro parâmetro se trata do nome da "collection"
const Model = mongoose.model('customers', schema)

/*
Inserir dados na 'collection'

    const register = new Model({
        name: 'Brunno',
        age: 35,
        email: 'brunnohibbeln10@gmail.com',
        password: '123456'
    })

Chamamos o método 'save' para fazer o registro

    register.save()
*/

module.exports = Model