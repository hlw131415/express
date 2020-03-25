const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    "name":String,
    "age":Number,
    "sex":String
})

module.exports = mongoose.model('lists',user)