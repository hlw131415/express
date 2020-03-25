const express = require('express')
const router = express.Router
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/lists")
const db = mongoose.connection
db.on('connected',()=>{
    console.log('db connected success')
})
db.on('error',(err)=>{
    console.log('db connect err'+err)
})
db.on('disconnected',()=>{
    console.log('db disconnected')
})

module.exports = router