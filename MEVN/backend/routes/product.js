var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var product = require('../models/product.js');
var classification = require('../models/classification');

// var fs = require('fs');
// var multer  = require('multer');
// var upload = multer({ dest: '../uploads/' });

var muilter = require('./multer');

//添加商品
router.post("/insert",function(req,res,next){
  var oneProduct = req.body.oneProduct || '';
  if(oneProduct != ''){
    oneProduct.sales=[];
    oneProduct.sales[0]={};
    oneProduct.sales[0].salesNumber=0;
    oneProduct.salesNumbers=0;

    oneProduct.back=[];
    oneProduct.back[0]={};
    oneProduct.back[0].backNumber=0;
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
//文件上传
// var upload = multer().single('avatar')
router.post('/uploadFile', function (req, res) {
  var upload=muilter.single('avatar');
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      res.json({
        status:"1",
        message:err
      });
    }else{
      console.log(req.file.filename);
      res.json({
        status:"0",
        msg:req.file.filename,
        result:"sucess"
      })
    }
  })
})
//取得所有的产品
router.get("/",function(req,res,next){
  var products=[];
  //根据分类ID查询分类名字
  function findClass(){
    return new Promise((resolve,reject)=>{
      var proLength=products.length,
          i=0;
      products.forEach((item,index,array)=>{
        classification.find({"_id":item.firstClass},function(err,doc){
          if(err){}else{
            if(doc){
              products[index].firstClass = doc[0].label;
              var data = doc[0].children;
              data.forEach((itemm,indexx,arrayy)=>{
                if(itemm._id == item.secondClass){
                  products[index].secondClass = itemm.label;
                  ++i;
                  if(i==proLength){
                    resolve();
                  }
                }
              })
            }else{
              resolve
            }
          }
        })
      })
    })
  }
  var findPro = new Promise((resolve,reject)=>{
    product.find({},function(err,doc){
      if(err){
      }else{
        products = doc;
        resolve();
      }
    })
  })
  findPro.then(findClass)
         .then(()=>{
           res.json({
             status:'1',
             msg:'get all classification suecess!',
             result:{
               count:products.length,
               allProducts:products
             }
           })
         })
         .catch(()=>{
           res.json({
             status:'0',
             msg:err.message
           });
         })
})
//取得库存紧张的货物
router.get("/lack",function(req,res,next){
  var limit = {"num":{$lt:1}};
  product.find(limit,function(err,doc){
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
//取得月销售额
router.get("/monthSales",function(req,res,next){
  product.find({},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message
      });
    }else{
      var result = [{
        month:"",

      }];
      doc.forEach((item,index,array)=>{
        var oneProductSales = item.sales;

        result[index] ={}
        result[index].month = item.sales
        result[index].salesNumber = item.sales
      })

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
  var getNew= req.body.oneProduct;
  var key=getNew._id;
  var oldValue  = {_id:key};
  var newData = {$set:getNew};
  product.update(oldValue,newData,function(err5,result){
    if(err5){
      console.log(err5);
      res.json({
        status:"1",
        message:err.message
      });
    }else{
      res.json({
        status:"0",
        msg:"",
        result:"sucess"
      })
    }
  })
})
//根据二级分类查询产品。
router.get("/SClass",function(req,res,next){
  var secondClassId=req.param("secondClass");
  var firstClassId=req.param("firstClass");
  product.find({secondClass:secondClassId,firstClass:firstClassId},function(err1,productsByclass){
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
  product.find({firstClass:firstClassId},function(err1,productsByclass){
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
//删除某和产品

router.delete("/delete",function(req,res,next){
  var id =req.body.id;
  product.remove({ _id: id }, function (err) {
    if(err){
      res.json({
        status:'1',
        msg:'删除产品失败',
      })
    }else{
      res.json({
        status:'0',
        msg:'删除产品成功',
      })
    }
  });
})
module.exports=router;
