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
//生成一张订单
router.post("/createOrder",function(req,res,next){
  var id=req.body.customerId;
  console.log(id);
  customer.update(
    {"_id":"5a55957128e0113f3b57d43f"},
    {$push:{cartList:{"time":new Date()}}},
    // update:{$push:{cartList:{ $currentDate:{time:true}}}},
    function(err,doc){
    if(err){
      res.json({
        status:1,
        msg:err.message,
        result:''
      })
    }else{
      if(doc.nModified != 0){
        res.json({
          status:0,
          msg:"创建订单成功，请向该订单添加商品",
          result:doc._id
        })
      }else{
        res.json({
          status:1,
          msg:"err3.message",
          result:''
        })
      }
    }
  })
})
//根据顾客ID和表单 插入普通订单
router.post("/insertGeneralGoods",function(req,res,next){
  var param=req.body;
  let oneNomalProduct={};
  // 把GoodsListId和time放在session里面，设置时间为绝对时间，当天晚上12点过期
  //判断session，如果时间有效，则加入到已有的generalGoods
  //否则新建generalGoods
  if(req.session.generalGoodsId){
    //插入generalGoods.lists数组中
  }else{
    //新建generalGoods

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
            msg:"sucess",
            result:{
              customerId:customer._id
            }
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
  var time = req.body.time;
  console.log("登录",param);
  customer.findOne({'_id':param},function(err,managerDoc){
    if(err){
      res.json({
        status:"1",
        msg:err.message
      })
    }else{
      if(managerDoc){
        console.log(managerDoc._id);
        res.cookie("customerId",managerDoc._id,{
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
  // res.clearCookie(customerId);
  res.cookie("customerName",'',{
    path:'/',
    MaxAge:-1
  });
  res.cookie("customerId",'',{
    path:'/',
    MaxAge:-1
  });
  res.json({
    status:0,
    msg:"退出登录成功",
    result:''
  })
});

module.exports = router;
