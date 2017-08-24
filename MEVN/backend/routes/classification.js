var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var classification = require('../models/classification');

mongoose.connect('mongodb://127.0.0.1:27017/DONGMU');
mongoose.connection.on("connected",function(){
  console.log("mongoose connect sucess!!!");
})
mongoose.connection.on("error",function(){
  console.log("mongoose connect fail!!!");
})
mongoose.connection.on("disconnected",function(){
  console.log("mongoose connect disconnected!!!");
})
//取得某一一级分类下的二级分类
router.get("/senconfClass",function(req,res,next){
  classification.find({},function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          lsit:doc
        }
      })
    }
  })
})

//取得某一一级分类
router.get("/firstClass",function(req,res,next){
  classification.find({},function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          lsit:doc
        }
      })
    }
  })
})
module.exports = router;
