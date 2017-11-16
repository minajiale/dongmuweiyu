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
//根据customerId 插入数据到customer表中
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
//顾客注册
router.post('/register', function(req, res, next) {
  var param = req.body;
  console.log(param);
  if(param.name!='' && param.phone !== ''){
    customer.create(param,function(err3,customer){
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
});
//根据电话查找某个用户
router.get('/searchCostomer',function(req,res,next){
  var phone = req.param('phone');
  customer.find({'phone':phone},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message,
        result:''
      });
    }else{
      console.log(doc.length);
      if(doc.length != 0){
        res.json({
          status:'1',
          msg:'找到该用户',
          result:{
            count:doc.length,
            customerId:doc[0]._id,
            customerName:doc[0].name,
          }
        })
      }else{
        res.json({
          status:'0',
          msg:"没有找到该用户",
          result:''
        });
      }
    }
  })
})
//顾客登录 这里可以使用get么？
router.post('/login', function(req, res, next) {
  var param = req.body.customer;
  console.log(param);
  customer.findOne({'_id':param},function(err,managerDoc){
    if(err){
      res.json({
        status:"1",
        msg:err.message
      })
    }else{
      if(managerDoc){
        res.cookie("costomerId",managerDoc._id,{
          path:'/',
          MaxAge:1000*60*60//一个小时
        });
        res.cookie("customerName",managerDoc.name,{
          path:'/',
          MaxAge:1000*60*60//一个小时
        });
        req.session.user=managerDoc;
        res.json({
          status:"0",
          msg:'登录成功',
          result:{
            managerID:managerDoc._id,
            managerName:managerDoc.name
          }
        })
      }else{
        res.json({
          status:"1",
          msg:"帐号密码错误"
        })
      }
    }
  })
});

//登出
router.post('/loginOut', function(req, res, next) {
  // res.clearCookie(costomerId);
  res.cookie("customerName",'',{
    path:'/',
    MaxAge:-1//一个小时
  });
  res.cookie("costomerId",'',{
    path:'/',
    MaxAge:-1//一个小时
  });
  res.json({
    status:0,
    msg:"退出登录成功",
    result:''
  })
});

module.exports = router;
