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
//编辑某条商品
router.post("/edit",function(req,res,next){
  var key=req.body.id;
  var oldValue  = {_id:id};
  var newData = {$set:{name:"内容",age:2}};
  product.update(oldValue,newData,function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log("update");
    }
  })
})

//根据二级分类查询产品。
router.get("/SClass",function(req,res,next){
  var secondClassId=req.param("secondClass");
  var firstClassId=req.param("firstClass");
  product.findOne({secondClass:secondClassId,firstClass:firstClassId},function(err1,productsByclass){
    if(err1){
      res.json({
        status:"1",
        message:err1.message,
        result:null
      });
    }else{
      if(productsByclass){
        res.json({
          status:'1',
          msg:'get all classification suecess!',
          result:{
            count:productsByclass.length,
            allProducts:productsByclass
          }
        })
      }else{
        res.json({
          status:'0',
          msg:'查询结果为null',
        })
      }
    }
  })
})
//取得某个一级分类下的所有产品
router.get("/FClass",function(req,res,next){
  var firstClassId=req.param("firstClass");
  product.findOne({firstClass:firstClassId},function(err1,productsByclass){
    if(err1){
      res.json({
        status:"1",
        message:err1.message,
        result:null
      });
    }else{
      if(productsByclass){
        res.json({
          status:'1',
          msg:'get all classification suecess!',
          result:{
            count:productsByclass.length,
            allProducts:productsByclass
          }
        })
      }else{
        res.json({
          status:'0',
          msg:'查询结果为null',
        })
      }
    }
  })
})

module.exports=router;
