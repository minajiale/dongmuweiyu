var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var customer = require('../models/customer');

mongoose.connect('mongodb://127.0.0.1:27017/DONGMU');
mongoose.connection.on("connected",function(){
  console.log("mongoose connect sucess");
})
mongoose.connection.on("error",function(){
  console.log("mongoose connect fail");
})
mongoose.connection.on("disconnected",function(){
  console.log("mongoose connect disconnected");
})
//取得这张表中所有数据
router.get("/",function(req,res,next){
  customer.find({},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message
      });
    }else{
      res.json({
        status:'1',
        msg:'get all order suecess!',
        result:{
          count:doc.length,
          allClass:doc
        }
      })
    }
  })
})
//插入数据到customer表中
router.post("/insert",function(req,res,next){
  let father = req.body.father || '',
      name = req.body.name || '';
    if(father=='' && name){
      console.log("插入某个一级分类")
      let classificationOne=
        {
          "key":2,
          "label":name,
          "children":[]
        };
      customer.create(classificationOne,function(err3,classification){
          if(err3){
            res.json({
              status:"1",
              message:err3.message
            });
          }else{
            res.json({
              status:"0",
              msg:"",
              result:"sucess"
            })
          }
      })
    }else{
      console.log("params err!");
    }
}),

module.exports = router;
