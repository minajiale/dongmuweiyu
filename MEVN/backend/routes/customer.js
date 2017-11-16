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
//根据顾客ID和表单 插入普通订单
router.post("/insertGeneralGoods",function(req,res,next){
  console.log(req);
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
  var time = req.body.time;
  customer.findOne({'_id':param},function(err,managerDoc){
    if(err){
      res.json({
        status:"1",
        msg:err.message
      })
    }else{
      if(managerDoc){
        //向generalGoods数组中插入一个时间
        // product.update(oldValue,newData,function(err5,result){
        //   if(err5){
        //     console.log(err5);
        //     res.json({
        //       status:"1",
        //       message:err.message
        //     });
        //   }else{
        //     res.json({
        //       status:"0",
        //       msg:"",
        //       result:"sucess"
        //     })
        //   }
        // });

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
