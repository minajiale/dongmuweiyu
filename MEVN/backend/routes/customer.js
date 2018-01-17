var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var customer = require('../models/customer');
var product = require('../models/product');

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
//取得顾客列表
router.get("/",function(req,res,next){
  customer.find({},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message
      });
    }else{
      var customer=[];
      doc.forEach(function(item,index,array){
        customer[index]={};
        customer[index].time=item._id.getTimestamp();
        customer[index].name=item.name;
        customer[index].phone=item.phone;
        customer[index].all=item.all;
        customer[index].paied=item.paied;
        customer[index].id=item._id;
        if(item.all>item.paied){
          customer[index].status="欠款";
          customer[index].owned=item.all-item.paied;
        }
        if(item.all=item.paied){
          customer[index].status="完成";
          customer[index].owned=0;
        }
        if(item.all<item.paied){
          customer[index].status="出错订单";
        }
        if(item.status==1){
          customer[index].status="作废订单";
        }
      })
      res.json({
        status:'1',
        msg:'get all order suecess!',
        result:{
          count:doc.length,
          allCustomer:customer
        }
      })
    }
  })
})
//获取某一个顾客的信息
router.get("/oneCustomer",function(req,res,next){
  var customerId=req.cookies.customerId;
  customer.find({"_id":customerId},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message
      });
    }else{
      var customer ={};
      customer.name=doc[0].name;
      customer.address=doc[0].address;
      customer.phone=doc[0].phone;
      res.json({
        status:'1',
        msg:'get customer suecess!',
        result:{
          count:doc.length,
          cus:customer,
        }
      })
    }
});
});
// 普通商品加入购物车
router.post("/insertCart",function(req,res,next){
  var generalId=req.body.commodityId ||'',
      genetalNumb=req.body.number || '',
      genralPrice=req.body.salePrice ||'',
      customerId=req.cookies.customerId,//从cookie中取
      i=0,
      exit=false;
  customer.find({"_id":customerId},function(err,doc){
        if(err){
          res.json({
            status:'0',
            msg:err.message
          });
        }else{
          var data =doc[0].generalGoodscart;
          for(i=0;i<data.length;i++){
            //如果该产品已经存在，加数量
            if(generalId == data[i].id){
              exit=true;
              break
            }
          }
          if(exit == true){
            console.log(generalId);
            console.log("exit");
            customer.update(
              {"_id":customerId,
                "generalGoodscart._id":data[i]._id
              },
              {
                $set: {
                  "generalGoodscart.$" : {
                    "saleNumber":parseInt(data[i].saleNumber)+parseInt(genetalNumb),
                    "salePrice":genralPrice,
                    "id":generalId
                  }
                }
              },
              function(errC,docC){
              if(errC){
                res.json({
                  status:1,
                  msg:errC.message,
                  result:''
                })
              }else{
                if(docC.nModified != 0){
                  res.json({
                    status:0,
                    msg:"加入购物车成功",
                    result:docC
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
          }else{
            console.log("no exit");
            customer.update(
              {"_id":customerId},
              {$push:{generalGoodscart:{"id":generalId,"salePrice":genralPrice,"saleNumber":genetalNumb}}},
              function(errCC,docCC){
              if(errCC){
                res.json({
                  status:1,
                  msg:errCC.message,
                  result:''
                })
              }else{
                if(docCC.nModified != 0){
                  res.json({
                    status:0,
                    msg:"加入购物车成功",
                    result:docCC
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
          }
        }
      })

});
//定门单加入购物车
router.post("/insertDoorGoodscart",function(req,res,next){
  var door=req.body ||'',
      customerId=req.cookies.customerId;//从cookie中取
      console.log(door);
  customer.update(
    {"_id":customerId},
    {$push:{DoorGoodscart:door}},
    function(errCC,docCC){
    if(errCC){
      res.json({
        status:1,
        msg:errCC.message,
        result:''
      })
    }else{
      if(docCC.nModified != 0){
        res.json({
          status:0,
          msg:"加入购物车成功",
          result:docCC
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
});
//根据顾客ID查询购物车中的定门单
router.get("/DoorGoodscart",function(req,res,next){
  var customerId=req.cookies.customerId;
  customer.find({"_id":customerId},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message
      });
    }else{
      var DoorGoods = doc[0].DoorGoodscart || ''
      if(DoorGoods != "" && DoorGoods != undefined){
        res.json({
          status:'1',
          msg:'get all classification suecess!',
          result:{
            count:DoorGoods.length,
            DoorGoods:DoorGoods,
          }
        })
      }else{
        res.json({
          status:'1',
          msg:'get all classification suecess!',
          result:{
            count:DoorGoods.length,
            DoorGoods:[],
          }
        })
      }
    }})
});
//根据顾客ID查询购物车中的普通货物
router.get("/cart",function(req,res,next){
  var customerId=req.cookies.customerId || '';
  customer.find({"_id":customerId},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message
      });
    }else{
      var data =doc[0].generalGoodscart || '';
      var cart=[];

      if(data != '' && data!= undefined){
        console.log("有数据");
        function promise (cart,data){
          return  new Promise((resolve,reject)=>{
            var flag=0;
            var length=data.length
            for(var i=0;i<length;i++){
              (function(i){
                product.find({"_id":data[i].id},function(errP,docP){
                  if(errP){
                    res.json({
                      status:'0',
                      msg:errP.message
                    });
                  }else{
                    flag++;
                    if(flag==(length)){
                      console.log(flag);
                      resolve();
                    }
                    cart.push(docP[0]);
                  }
                })
              })(i)
            }
          })
        }
        promise(cart,data).then(()=>{
          res.json({
            status:'1',
            msg:'get all classification suecess!',
            result:{
              count:doc.length,
              products:data,
              cartList:cart
            }
          })
        },()=>{
          console.log("错？？");
        })
      }else{
        console.log("没有普通货物");
        res.json({
          status:'1',
          msg:'get all classification suecess!',
          result:{
            count:doc.length,
            products:data,
            cartList:""
          }
        })
      }
    }
  })
})
//生成一张订单
router.post("/createOrder",function(req,res,next){
    var customerId=req.cookies.customerId || '',
        paiedFirstt = parseInt(req.body.paied) ,
        allAmountt=parseInt(req.body.allAmount);
        console.log("paiedFirst"+paiedFirstt);
        console.log("allAmountt"+allAmountt);
    customer.find({"_id":customerId},function(err,doc){
      if(err){
        res.json({
          status:'0',
          msg:err.message
        });
      }else{
        var DoorGoods = doc[0].DoorGoodscart;
        var generalGoodscart = doc[0].generalGoodscart,
            paied = parseInt(doc[0].paied)|| 0,
            Amount=parseInt(doc[0].all) || 0,
            paiedFirst = paied+paiedFirstt,
            allAmount = Amount+allAmountt;
        if(DoorGoods != undefined && generalGoodscart== undefined){
          customer.update(
          {"_id":customerId},
          {$push:{orderList:{"DoorGoodsOrder":DoorGoods}}},
          function(err,doc){
          if(err){
            res.json({
              status:1,
              msg:err.message,
              result:'',
            })
          }else{
            if(doc.nModified != 0){
              customer.update(
              {"_id":customerId},
              {$set:{"all":allAmount,"paied":paiedFirst,"generalGoodscart":[],"DoorGoodscart":[]}},
              function(err,doc){
              if(err){
                res.json({
                  status:1,
                  msg:err.message,
                  result:'',
                })
              }else{
                if(doc.nModified != 0){
                  res.json({
                    status:0,
                    msg:"创建订单成功",
                    result:doc
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
            }else{
              res.json({
                status:1,
                msg:"err3.message",
                result:''
              })
            }
          }
        });
        }
        if(DoorGoods == undefined && generalGoodscart != undefined){
          generalGoodscart.forEach((item,index,array)=>{
            var key=item.id;
            console.log("item"+item);
            var oldValue  = {_id:key};
            product.find(oldValue,function(err1,products){
              if(err1){
                res.json({
                  status:"1",
                  message:err1.message,
                  result:null
                });
              }else{
                if(products){
                  var number = parseInt(products[0].num)-item.saleNumber;
                  var newData = {$set:{num:number}};
                  console.log("number"+number);
                  product.update(oldValue,newData,function(err5,result){
                    if(err5){
                      console.log(err5);
                      res.json({
                        status:"1",
                        message:err.message
                      });
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
          });
          customer.update(
          {"_id":customerId},
          {$push:{orderList:{"generalGoodsOrder":generalGoodscart}}},
          function(err,doc){
          if(err){
            res.json({
              status:1,
              msg:err.message,
              result:'',
            })
          }else{
            if(doc.nModified != 0){
              customer.update(
              {"_id":customerId},
              {$set:{"all":allAmount,"paied":paiedFirst,"generalGoodscart":[],"DoorGoodscart":[]}},
              function(err,doc){
              if(err){
                res.json({
                  status:1,
                  msg:err.message,
                  result:'',
                })
              }else{
                if(doc.nModified != 0){
                  res.json({
                    status:0,
                    msg:"创建订单成功",
                    result:doc
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
            }else{
              res.json({
                status:1,
                msg:"err3.message",
                result:''
              })
            }
          }
        })
        }
        if(DoorGoods != undefined && generalGoodscart != undefined){
          generalGoodscart.forEach((item,index,array)=>{
            var key=item.id;
            console.log("item"+item);
            var oldValue  = {_id:key};
            product.find(oldValue,function(err1,products){
              if(err1){
                res.json({
                  status:"1",
                  message:err1.message,
                  result:null
                });
              }else{
                if(products){
                  var number = parseInt(products[0].num)-item.saleNumber;
                  var newData = {$set:{num:number}};
                  console.log("number"+number);
                  product.update(oldValue,newData,function(err5,result){
                    if(err5){
                      console.log(err5);
                      res.json({
                        status:"1",
                        message:err.message
                      });
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
          });
          customer.update(
          {"_id":customerId},
          {$push:{orderList:{"generalGoodsOrder":generalGoodscart,"DoorGoodsOrder":DoorGoods}}},
          function(err,doc){
          if(err){
            res.json({
              status:1,
              msg:err.message,
              result:'',
            })
          }else{
            if(doc.nModified != 0){
              customer.update(
              {"_id":customerId},
              {$set:{"all":allAmount,"paied":paiedFirst,"generalGoodscart":[],"DoorGoodscart":[]}},
              function(err,doc){
              if(err){
                res.json({
                  status:1,
                  msg:err.message,
                  result:'',
                })
              }else{
                if(doc.nModified != 0){
                  res.json({
                    status:0,
                    msg:"创建订单成功",
                    result:doc
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
            }else{
              res.json({
                status:1,
                msg:"err3.message",
                result:''
              })
            }
          }
        })
        }
      }})
})
//根据某个顾客ID查询所有的订单
router.get("/findOrderByCusId",function(req,res,next){
  var customerId=req.cookies.customerId || '';
  customer.find({"_id":customerId},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message
      });
    }else{
      var Orders = doc[0].orderList
      var result=[];
      var orderLength = Orders.length;

      function promise(result,Orders,orderLength){
        var flag=0;
        return new Promise((resolve,reject)=>{
          Orders.forEach((item,index,array)=>{
            result[index]={};
            result[index].DoorGoodsOrder = item.DoorGoodsOrder;
            result[index].id = item._id;
            result[index].time = item._id.getTimestamp();
            result[index].general=[];

            // result[index].generalGoodsOrder = item.generalGoodsOrder;
            var data =item.generalGoodsOrder || '';
            // result[index].generalGoods = [];
            var temp=index;
            data.forEach(function(item,index,array){
              var temp2 = index;
              product.find({"_id":item.id},function(errP,docP){
                if(errP){
                  res.json({
                    status:'0',
                    msg:errP.message
                  });
                }else{
                  data.forEach((item,index,array)=>{
                    if(item.id == docP[0]._id){
                      var temp3 = result[temp].general[temp2] = {};
                      temp3.proId=item.id;
                      temp3.price=item.salePrice;
                      temp3.num=item.saleNumber;
                      // result[m].unit=data[m].unit;
                      temp3.name=docP[0].name;
                      temp3.spec=docP[0].spec;
                      temp3.code=docP[0].code;
                    }
                  })
                  // result[temp].generalGoods.push(docP[0]);
                  flag++;
                  console.log(flag);
                  // console.log("length*orderLength"+length*orderLength);
                  if(flag==orderLength){
                    console.log(flag);
                    resolve();
                  }
                }
              })
            })
          })
        })
      }
      promise(result,Orders,orderLength).then(()=>{
        console.log("你说呢？？？joson");
        res.json({
          status:'1',
          msg:'get all classification suecess!',
          result:{
            count:doc.length,
            Orders:result,
          }
        })
      },()=>{
        console.log("错？？");
      })
    }})
})
//获得订单列表
router.get("orders",function(req,res,next){

});
//修改购物车中的普通商品
router.post("/cart/edit",function(req,res,next){
  var customerId=req.cookies.customerId || '',
      target = req.body.id,
      newdata = req.body.newdata;
  console.log("target"+target);
  console.log("newdata"+newdata);
  customer.updateOne(
   { _id: customerId, "generalGoodscart._id": target },
   { $set: { "generalGoodscart.$.saleNumber" : newdata.num, "generalGoodscart.$.salePrice": newdata.price} },
   function(err,doc){
     if(err){
       res.json({
         status:"1",
         message:err.message
       });
     }else{
       res.json({
         status:"0",
         msg:doc,
         result:"sucess"
       })
     }
   }
)
});
//删除购物车中的定门单中商品
router.delete("/cart/delete",function(req,res,next){
  var customerId=req.cookies.customerId || '',
      target = req.body.id;
  console.log("target"+target);
  customer.update(
   { _id: customerId},
  { $pull: { 'DoorGoodscart': { _id: target } } },
  function(err,doc){
    if(err){
      res.json({
        status:"1",
        message:err.message
      });
    }else{
      res.json({
        status:"0",
        msg:doc,
        result:"sucess"
      })
    }
  }
);
});
//修改购物车中的定门单
router.post("/cart/editDoor",function(req,res,next){
  var customerId=req.cookies.customerId || '',
      target = req.body.id,
      newdata = req.body.newdata,
      spec=req.body.spec;
  console.log("target"+target);
  console.log("newdata"+spec);
  customer.updateOne(
   { _id: customerId, "DoorGoodscart._id": target },
   { $set: {
    // "DoorGoodscart.$" : newdata,
     "DoorGoodscart.$.remark" : newdata.remark,
     "DoorGoodscart.$.spec" : spec,
     "DoorGoodscart.$._id" :  target,
     "DoorGoodscart.$.price" : newdata.price,
     "DoorGoodscart.$.number" : newdata.number,
     "DoorGoodscart.$.doorLine" : newdata.doorLine,
     "DoorGoodscart.$.wall" : newdata.wall,
     "DoorGoodscart.$.wallWidth" : newdata.wallWidth,
     "DoorGoodscart.$.wallHeight" : newdata.wallHeight,
     "DoorGoodscart.$.doorwayWidth" : newdata.doorwayWidth,
     "DoorGoodscart.$.doorwayHeight" : newdata.doorwayHeight,
     "DoorGoodscart.$.color" : newdata.color,
     } },
   function(err,doc){
     if(err){
       res.json({
         status:"1",
         message:err.message
       });
     }else{
       res.json({
         status:"0",
         msg:doc,
         result:"sucess"
       })
     }
   }
)
})
//删除购物车中的普通商品
router.delete("/cart/deleteGeneral",function(req,res,next){
  var customerId=req.cookies.customerId || '',
      target = req.body.id;
  console.log("target"+target);
  customer.update(
   { _id: customerId},
  { $pull: { 'generalGoodscart': { _id: target } } },
  function(err,doc){
    if(err){
      res.json({
        status:"1",
        message:err.message
      });
    }else{
      res.json({
        status:"0",
        msg:doc,
        result:"sucess"
      })
    }
  }
);
});
//付款
router.post("/pay",function(req,res,next){
  var customerId=req.body.customerId || '';
  var money=parseInt(req.body.money);
  var oldValue  = {_id:customerId};
  console.log("money"+money);
  customer.find(oldValue,function(err1,doc){
    if(err1){
      res.json({
        status:"1",
        message:err1.message,
        result:null
      });
    }else{
      if(doc){
        var paied = parseInt((doc[0].paied));
        console.log("paied"+paied);
        var newData = {$set:{paied:(paied+money)}};
        customer.update(oldValue,newData,function(err5,result){
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
      }else{
        res.json({
          status:'0',
          msg:'查询结果为null',
        })
      }
    }
  })
})
//顾客注册
router.post('/register', function(req, res, next) {
  var param = req.body;
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
})
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
  customer.findOne({'_id':param},function(err,managerDoc){
    if(err){
      res.json({
        status:"1",
        msg:err.message
      })
    }else{
      if(managerDoc){
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
