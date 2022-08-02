const mongoose = require('mongoose')

const schema = new mongoose.Schema({
   name: String,
   brand: Number,
   prime: String,
})

const Model = mongoose.model('products', schema)

module.exports = Model