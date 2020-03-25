var express = require('express');
var router = express.Router();
var db = require('../db/db')
var users = require('../model/users')

router.post('/',(req,res,next)=>{
    let {name} = req.query
   // console.log(name)
    users.find({name},(err,doc)=>{
        console.log(doc)
       if(err){
           res.json({
               status:'0',
               msg:'用户名或密码不正确！'
           })
       }else{
           if(name){
            res.json({
                status:'1',
                msg:'登录成功',
                result:{
                    count:doc.length,
                    user:doc[name]
                }
            })
           }
           
       }
    })
})
module.exports = router