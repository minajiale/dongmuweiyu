var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var product = require('../models/product.js');

//添加商品
router.post("/insert",function(req,res,next){
  let oneProduct = req.body.oneProduct || '';
  if(oneProduct != ''){
    product.create(oneProduct,function(err3,doc){
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
  }
})


//取得所有的产品
router.get("/",function(req,res,next){
  product.find({},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message
      });
    }else{
      res.json({
        status:'1',
        msg:'get all classification suecess!',
        result:{
          count:doc.length,
          allProducts:doc
        }
      })
    }
  })
})

// 加入购物车
router.post("/addcart",function(req,res,next){
  var customerId="";

})

module.exports=router;
