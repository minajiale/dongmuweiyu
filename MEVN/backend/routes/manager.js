var express = require('express');
var router = express.Router();

var manager = require('../models/manager.js')

/* GET manaders listing. */
router.get('/', function(req, res, next) {
  res.send('manaders');
});
//登录
router.post('/login', function(req, res, next) {
  var param = req.body.manager;
  manager.findOne(param,function(err,managerDoc){
    if(err){
      res.json({
        status:"1",
        msg:err.message
      })
    }else{
      if(managerDoc){
        res.cookie("managerId",managerDoc._id,{
          path:'/',
          MaxAge:1000*60*60//一个小时
        });
        res.cookie("managerName",managerDoc.username,{
          path:'/',
          MaxAge:1000*60*60//一个小时
        });
        req.session.user=managerDoc;
        res.json({
          status:"0",
          msg:'登录成功',
          result:{
            managerID:managerDoc._id,
            role:managerDoc.role,
            managerName:managerDoc.username
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
  // res.clearCookie(managerId);
  res.cookie("managerId",'',{
    path:'/',
    MaxAge:-1//一个小时
  });
  res.cookie("managerName",'',{
    path:'/',
    MaxAge:-1//一个小时
  });
  res.json({
    status:0,
    msg:"退出登录成功",
    result:''
  })
});
//zhuce
router.post('/register',function(req,res,next){
  console.log("zhucece");
  var oneProduct = req.body.oneProduct || '';
  console.log(oneProduct);
  if(oneProduct != ''){
    manager.create(oneProduct,function(err3,doc){
      if(err3){
        res.json({
          status:"1",
          message:err3.message
        });
      }else{
        console.log(doc);
        res.json({
          status:"0",
          msg:"",
          result:"sucess"
        })
      }
    })
  }
})
module.exports = router;
