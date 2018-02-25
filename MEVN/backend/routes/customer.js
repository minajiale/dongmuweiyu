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
        var allInt=parseInt(item.all);
        var paiedInt=parseInt(item.paied);
        if(item.status==1){
          customer[index].status="作废订单";
        }else{
          if(allInt>paiedInt){
            customer[index].status="欠款";
            customer[index].owned=allInt-paiedInt;
          }
          if(allInt==paiedInt){
            customer[index].status="完成";
            customer[index].owned=0;
          }
          if(allInt<paiedInt){
            customer[index].status="出错订单";
          }
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
      if(doc.length !=0){
        var customer ={};
        customer.name=doc[0].name;
        customer.address=doc[0].address[0];
        customer.phone=doc[0].phone;
        res.json({
          status:'1',
          msg:'get customer suecess!',
          result:{
            count:doc.length,
            cus:customer,
          }
        })
      }else{
        res.json({
          status:'1',
          msg:'没有任何数据',
          result:{}
        })
      }
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
      if(DoorGoods != "" && DoorGoods != undefined && DoorGoods.length !=0){
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
        managerId=req.cookies.managerId || '',
        paiedFirstt = parseInt(req.body.paied) ,
        allAmountt=parseInt(req.body.allAmount);
    var generalGoodscart,
        DoorGoods,
        paied,
        Amount,
        paiedFirst,
        sucess,
        exitBoth,
        allAmount;
    //查询customer表中购物车的数据和旧的总消费金额
    var findCart = new Promise((resolve,reject)=>{
        customer.find({"_id":customerId},function(err,doc){
          if(err){
            sucess=false;
          }else{
            generalGoodscart = doc[0].generalGoodscart,
            DoorGoods = doc[0].DoorGoodscart,
            paied = parseInt(doc[0].paied)|| 0,
            Amount=parseInt(doc[0].all) || 0,
            paiedFirst = paied+paiedFirstt,
            allAmount = Amount+allAmountt;
            resolve();
          }})
      })
    //更新总金额all和已经支付金额和清空购物车中的数据
    function updateAll(){
      return new Promise((resolve,reject)=>{
        var all = Amount + allAmountt;
        customer.update(
        {"_id":customerId},
        {$set:{"all":all,"paied":paiedFirst,"generalGoodscart":[],"DoorGoodscart":[]}},
        function(err,doc){
        if(err){
          sucess=false;
        }else{
          if(doc.nModified != 0){
            console.log("all,paied已更新，购物车已经清空");
            resolve()
          }else{
            sucess=false;
          }
        }
      })
      })
    }
    //将购物车中定门单转移到orderList
    function  updateDoorList(){
      return new Promise((resolve,reject)=>{
        customer.update(
        {"_id":customerId},
        {$push:{orderList:{"DoorGoodsOrder":DoorGoods,"owner":managerId}}},
        function(err,doc){
        if(err){
          sucess=false;
        }else{
          console.log("定门单一生成订单");
          resolve();
        }
      })
      })
    }
    //修改普通商品列表的月销售额和总的销售额
    // function updateProduct(){
      var updateProduct=  new Promise((resolve,reject)=>{
        var cartLength = generalGoodscart.length,
            i=0;
        generalGoodscart.forEach((item,index,array)=>{
          var key=item.id;
          var oldValue  = {_id:key};
          product.find(oldValue,function(err1,products){
            if(err1){
              sucess = false;
            }else{
              if(products){
                var salesNumbers = products[0].salesNumbers,//总销量
                    sales = products[0].sales,
                    lastMonthSales = sales[sales.length-1],
                    salesTarget=lastMonthSales._id,
                    lastMonthSalesYear = salesTarget.getTimestamp().getFullYear(),
                    lastMonthSalesMonth = salesTarget.getTimestamp().getMonth(),
                    lastMonthSalesNumber = lastMonthSales.salesNumber;//月销量
                var now = new Date(),
                    nowMonth = now.getMonth(),
                    nowYear = now.getFullYear();
                //这个月还咩结束
                if(nowMonth == lastMonthSalesMonth && nowYear == lastMonthSalesYear){
                  var MonthSaleNumber = parseInt(lastMonthSalesNumber)+item.saleNumber;//销售量
                  product.updateOne(
                   { _id: key, "sales._id": salesTarget },
                   { $set: { "sales.$.salesNumber" : MonthSaleNumber} },
                   function(err,doc){
                     if(err){
                       sucess=false;
                     }else{
                       console.log("修改着一个月的月销售额成功");
                       i++;
                       if(i==cartLength){
                         resolve();
                       }
                     }
                   })
                }else{
                  //这个月已经结束了
                  var temp4 = {};
                  temp4.salesNumber = item.saleNumber;
                  product.update(
                    {"_id":customerId},
                    {$push:{sales:temp4}},
                    function(errCC,docCC){
                    if(errCC){
                      sucess=false;
                    }else{
                      if(docCC.nModified != 0){
                        console.log("修改月销售额成功");
                        i++;
                        if(i==cartLength){
                          resolve();
                        }
                      }else{
                        sucess=false;
                      }
                    }
                  })
                }
              }
            }
          })
        })
      })
  // }
    //将购物车中的普通商品转移到orderList
    function  updateGeneralList(){
      return new Promise((resolve,reject)=>{
        customer.update(
        {"_id":customerId},
        {$push:{orderList:{"generalGoodsOrder":generalGoodscart,"owner":managerId}}},
        function(err,doc){
        if(err){
          sucess=false;
        }else{
          console.log("定门单一生成订单");
          updateProduct.then(()=>{
            resolve();
          })
        }
      })
      })
    }
    findCart.then(function(){
      if(DoorGoods != undefined && generalGoodscart == undefined){
        exitBoth=false;
        updateDoorList()
      }
      if(generalGoodscart != undefined && DoorGoods != undefined){
        exitBoth=true;
        updateDoorList()
      }
      if(generalGoodscart != undefined && DoorGoods == undefined){
        exitBoth=false;
        updateGeneralList();
      }})
      .then(()=>{
        if(exitBoth == true){
          updateGeneralList()
        }
      }).then(()=>{
        updateAll()
      })
      .then(()=>{
        res.json({
          status:0,
          msg:"创建订单成功",
          result:doc
        })
      })
      .catch(()=>{
        console.log("55555失败了");
        res.json({
          status:1,
          msg:"err3.message",
          result:''
        })
      })
})
//退货 product数量，总销量减，月销量减少，customer表generalGoodsOrder减少一个returnBack加一个记录
router.post("/returnBack",function(req,res,next){
  var data = req.body,
      proId= data.proId,
      backnumber=parseInt(data.backnumber),
      orderId=data.orderId,
      oldnumber=parseInt(data.oldnumber),
      orderListId=data.orderListId,
      salePrice=data.salePrice,
      customerId=req.cookies.customerId || '';
  var allSucess = true;//只要有一个回调没完成，就会改成false
  var returnBackData = {},
      oldValue = {"_id":customerId};
  returnBackData.orderId=orderId;
  returnBackData.ProId=proId;
  returnBackData.number=backnumber;
  returnBackData.orderListId=orderListId;
  returnBackData.salePrice=salePrice;

  //添加修改记录
  function pushreturnBack(){
    customer.update(
      oldValue,
      {$push:{returnBack:returnBackData}},
      function(err,doc){
        if(err){
          allSucess=false;
          console.log("pushreturnBack失败"+err);
        }else{
          console.log("添加退货记录成功");
        }
      }
    )
  };
  //找到嵌套数组generalGoodsOrder的下标
  function findgeneralTarget(){
    return new Promise(function(resolve,reject){
      var targrt = {"_id":customerId};
      customer.find(targrt,function(err,doc){
        if(err){
          reject(err);
        }else{
          doc[0].orderList.forEach((item,index,array)=>{
            if(item._id==orderListId){
              item.generalGoodsOrder.forEach((itemm,indexx,arrayy)=>{
                if(itemm._id ==orderId){
                  console.log("index： "+index+"  indexx:  "+indexx);
                  var key={};
                  key.index=index;
                  key.indexx=indexx;
                  resolve(key);
                }
              })
            }
          })
        }
      })
    })
  }
  //更新orderList.generalGoodsOrder的saleNumber
  function updateGoodsOrder(key){
    var saleNumber = parseInt(oldnumber)-parseInt(backnumber);//销售量
    var targrt = {"_id":customerId};
    var index = key.index;
    var indexx= key.indexx;
    var newData = { $set: { "orderList.index.generalGoodsOrder.indexx.saleNumber" : saleNumber} };
    console.log("index： "+index+"  indexx:  "+indexx);
    product.update(targrt,newData,function(err5,result){
      if(err5){
        allSucess=false;
        console.log("updateGoodsOrder失败"+err5);
      }else{
        if(result.nModified ==0){
          console.log("更新orderList.generalGoodsOrder的saleNumber失败");
        }else{
          console.log("更新orderList.generalGoodsOrder的saleNumber成功");
        }
      }
    })
  }
  //更新某一个顾客总的金额all, 退货金额
  function updateAll(){
    var reduceAll = parseInt(backnumber)*parseInt(salePrice);
    customer.update(
      oldValue,
      {$inc: {returnAmount: +reduceAll}},
      function(err,doc){
        if(err){
          allSucess=false;
          console.log("updateAll失败"+err);
        }else {
          console.log("更新某一个顾客总的金额all成功");
        }
    })
  }
  //更新product表中的商品数量和总的销量
  function updatePro(){
    product.update(
      {"_id":proId},
      { $inc: { "num": +backnumber,"salesNumbers":-backnumber}},
      function(err,doc){
        if(err){
          allSucess=false;
          console.log("updatePro失败"+err);
        }else{
          console.log("更新product表中的商品数量和总的销量成功");
        }
    })
  }
  //更新某个product的月退货销量
  function updateMonthSales(){
    var targrt = {"_id":proId};
    product.find(targrt,function(err,doc){
      if(err){
        console.log("查找id为proId的产品失败");
      }else{
        var back = doc[0].back;
        lastMonthSales = back[back.length-1],
        salesTarget=lastMonthSales._id,
        lastMonthBackNumber=parseInt(lastMonthSales.backNumber),
        lastMonthSalesYear = salesTarget.getTimestamp().getFullYear(),
        lastMonthSalesMonth = salesTarget.getTimestamp().getMonth();
        var now = new Date(),
            nowMonth = now.getMonth(),
            nowYear = now.getFullYear();

        if(nowMonth == lastMonthSalesMonth && nowYear == lastMonthSalesYear){
          var MonthBackNumber = lastMonthBackNumber+backnumber;//月退货量
          product.updateOne(
           { _id: proId, "back._id": salesTarget },
           { $set: { "back.$.backNumber" : MonthBackNumber} },
           function(err,doc){
             if(err){
               res.json({
                 status:"1",
                 message:err.message
               });
             }else{
               console.log("修改着一个月的月销售额成功");
             }
           }
        )
        }else{
          var temp4 = {};
          temp4.backNumber = backnumber;
          product.update(
            {"_id":proId},
            {$push:{back:temp4}},
            function(errCC,docCC){
            if(errCC){
              res.json({
                status:1,
                msg:errCC.message,
                result:''
              })
            }else{
              if(docCC.nModified != 0){
                console.log("修改月销售额成功");
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
  }
  pushreturnBack();
  updateAll();
  updatePro();
  updateMonthSales();
  res.json({
    status:'1',
    msg:"退货成功"
  });
  // findgeneralTarget().then(updateGoodsOrder);
  // if(allSucess ==true){
  //   res.json({
  //     status:'1',
  //     msg:"退货成功"
  //   });
  //   }else{
  //     res.json({
  //       status:'0',
  //       msg:err.message
  //     });
  // }
})
//补货
router.post("/addBack",function(req,res,next){
  var data = req.body,
      proId= data.proId,
      backnumber=parseInt(data.backnumber),
      orderId=data.orderId,
      oldnumber=parseInt(data.oldnumber),
      orderListId=data.orderListId,
      salePrice=data.salePrice,
      customerId=req.cookies.customerId || '';
  var allSucess = true;//只要有一个回调没完成，就会改成false
  var returnBackData = {},
      oldValue = {"_id":customerId};
  returnBackData.orderId=orderId;
  returnBackData.orderListId=orderListId;
  returnBackData.ProId=proId;
  returnBackData.number=backnumber;
  returnBackData.salePrice=salePrice;
  //添加补货记录
  function pushreturnBack(){
    customer.update(
      oldValue,
      {$push:{addBack:returnBackData}},
      function(err,doc){
        if(err){
          allSucess=false;
          console.log("pushAddBack失败"+err);
        }else{
          console.log("添加退货记录成功");
        }
      }
    )
  };
  //找到嵌套数组generalGoodsOrder的下标
  function findgeneralTarget(){
    return new Promise(function(resolve,reject){
      var targrt = {"_id":customerId};
      customer.find(targrt,function(err,doc){
        if(err){
          reject(err);
        }else{
          doc[0].orderList.forEach((item,index,array)=>{
            if(item._id==orderListId){
              item.generalGoodsOrder.forEach((itemm,indexx,arrayy)=>{
                if(itemm._id ==orderId){
                  console.log("index： "+index+"  indexx:  "+indexx);
                  var key={};
                  key.index=index;
                  key.indexx=indexx;
                  resolve(key);
                }
              })
            }
          })
        }
      })
    })
  }
  //更新orderList.generalGoodsOrder的saleNumber
  function updateGoodsOrder(key){
    var saleNumber = parseInt(oldnumber)-parseInt(backnumber);//销售量
    var targrt = {"_id":customerId};
    var index = key.index;
    var indexx= key.indexx;
    var newData = { $set: { "orderList.index.generalGoodsOrder.indexx.saleNumber" : saleNumber} };
    console.log("index： "+index+"  indexx:  "+indexx);
    product.update(targrt,newData,function(err5,result){
      if(err5){
        allSucess=false;
        console.log("updateGoodsOrder失败"+err5);
      }else{
        if(result.nModified ==0){
          console.log("更新orderList.generalGoodsOrder的saleNumber失败");
        }else{
          console.log("更新orderList.generalGoodsOrder的saleNumber成功");
        }
      }
    })
  }
  //更新某一个顾客退货金额
  function updateAll(){
    var reduceAll = parseInt(backnumber)*parseInt(salePrice);
    customer.update(
      oldValue,
      {$inc: {addAmount: +reduceAll}},
      function(err,doc){
        if(err){
          allSucess=false;
          console.log("updateAll失败"+err);
        }else {
          console.log("更新某一个顾客总的金额all成功");
        }
    })
  }
  //更新product表中的商品数量和总的销量
  function updatePro(){
    product.update(
      {"_id":proId},
      { $inc: { "num": -backnumber,"salesNumbers":+backnumber}},
      function(err,doc){
        if(err){
          allSucess=false;
          console.log("updatePro失败"+err);
        }else{
          console.log("更新product表中的商品数量和总的销量成功");
        }
    })
  }
  //更新某个product的月退货销量
  function updateMonthSales(){
    var targrt = {"_id":proId};
    product.find(targrt,function(err,doc){
      if(err){
        console.log("查找id为proId的产品失败");
      }else{
        var back = doc[0].back;
        lastMonthSales = back[back.length-1],
        salesTarget=lastMonthSales._id,
        lastMonthBackNumber=parseInt(lastMonthSales.backNumber),
        lastMonthSalesYear = salesTarget.getTimestamp().getFullYear(),
        lastMonthSalesMonth = salesTarget.getTimestamp().getMonth();
        var now = new Date(),
            nowMonth = now.getMonth(),
            nowYear = now.getFullYear();

        if(nowMonth == lastMonthSalesMonth && nowYear == lastMonthSalesYear){
          var MonthBackNumber = lastMonthBackNumber+backnumber;//月退货量
          product.updateOne(
           { _id: proId, "back._id": salesTarget },
           { $set: { "back.$.backNumber" : MonthBackNumber} },
           function(err,doc){
             if(err){
               res.json({
                 status:"1",
                 message:err.message
               });
             }else{
               console.log("修改着一个月的月销售额成功");
             }
           }
        )
        }else{
          var temp4 = {};
          temp4.backNumber = backnumber;
          product.update(
            {"_id":proId},
            {$push:{back:temp4}},
            function(errCC,docCC){
            if(errCC){
              res.json({
                status:1,
                msg:errCC.message,
                result:''
              })
            }else{
              if(docCC.nModified != 0){
                console.log("修改月销售额成功");
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
  }
  pushreturnBack();
  updateAll();
  updatePro();
  // updateMonthSales();
  res.json({
    status:'1',
    msg:"退货成功"
  });
  // findgeneralTarget().then(updateGoodsOrder);
  // if(allSucess ==true){
  //   res.json({
  //     status:'1',
  //     msg:"退货成功"
  //   });
  //   }else{
  //     res.json({
  //       status:'0',
  //       msg:err.message
  //     });
  // }
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
      var allAmounts = doc[0].all;
      var paied = doc[0].paied;
      var returnBackOld = doc[0].returnBack;
      var addBackOld = doc[0].addBack;//补
      var Orders = doc[0].orderList;
      var result=[];
      var orderLength = Orders.length;
      var returnBack=[];
      var addBack = [];
      var returnBackAmount=0;
      var addBackAmount = 0;

      //退货详细
      var freturnBack =  new Promise((resolve, reject)=>{
        console.log("进入freturnBack");
        var returnLength = returnBackOld.length;
        var i=0;
        if(returnLength!=0){
          returnBackOld.forEach((item,index,array)=>{
            i++;
            returnBack[index] = {};
            returnBackAmount += (item.number)*item.salePrice;
            returnBack[index].num = item.number
            returnBack[index].salePrice = item.salePrice
            returnBack[index].time = item._id.getTimestamp()
            product.find({"_id":item.ProId},function(err,doc){
              if(err){
                res.json({
                  status:'0',
                  msg:errP.message
                });
              }else{
                returnBack[index].name=doc[0].name;
                returnBack[index].unit=doc[0].unit;
                returnBack[index].code=doc[0].code;
                returnBack[index].spec=doc[0].spec;
              }
              console.log("i" + i);
              console.log("returnLength" + returnLength);
              if(i==returnLength){
                console.log("推出freturnBack");
                resolve();
              }
            })
          })
        }else{
          console.log("推出freturnBack");
          resolve()
        }
      })
      //补货详细
      function faddBack(){
        return new Promise((resolve, reject)=>{
          console.log("进入faddBack");
          var addLength = addBackOld.length;
          var i=0;
          console.log("addLength:  "+ addLength);
          if(addLength!=0){
            addBackOld.forEach((item,index,array)=>{
              i++;
              addBack[index] = {};
              addBackAmount += (item.number)*item.salePrice;
              addBack[index].num = item.number
              addBack[index].salePrice = item.salePrice
              addBack[index].time = item._id.getTimestamp()
              product.find({"_id":item.ProId},function(err,doc){
                if(err){
                  res.json({
                    status:'0',
                    msg:errP.message
                  });
                }else{
                  addBack[index].name=doc[0].name;
                  addBack[index].code=doc[0].code;
                  addBack[index].unit=doc[0].unit;
                  addBack[index].spec=doc[0].spec;
                }
                console.log("i" + i);
                console.log("addLength" + addLength);
                if(i==addLength){
                    console.log("推出faddBack");
                  resolve();
                }
              })
            })
          }else{
              console.log("推出faddBack");
            resolve()
          }
        })
      }
      function promise(){
        return new Promise((resolve,reject)=>{
          var flag=0;
          console.log("进入promise");
          Orders.forEach((item,index,array)=>{
            var orderListId = item._id;
            result[index]={};
            result[index].DoorGoodsOrder = item.DoorGoodsOrder || [];
            result[index].id = item._id;
            result[index].time = item._id.getTimestamp();
            result[index].general=[];
            var data =item.generalGoodsOrder || [];
            var temp=index;
            if(data.length != 0){
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
                        temp3.orderId=item._id;
                        temp3.orderListId=orderListId;
                        temp3.price=item.salePrice;
                        temp3.num=item.saleNumber;
                        temp3.name=docP[0].name;
                        temp3.spec=docP[0].spec;
                        temp3.code=docP[0].code;
                      }
                    })
                    console.log("falg:   "+flag);
                    console.log("orderLength:   "+orderLength);
                    ++flag;
                    if(flag==orderLength){
                      console.log("推出promise");
                      resolve();
                    }
                  }
                })
              })
            }else{
              ++flag;
              if(flag==orderLength){
                console.log("推出promise");
                resolve();
              }
            }
          })
        })
      }
      freturnBack.then(faddBack)
                 .then(promise)
                 .then(()=>{
                   res.json({
                     status:'1',
                     msg:'get all classification suecess!',
                     result:{
                       count:doc.length,
                       Orders:result,
                       allAmount:allAmounts,
                       returnBackAmount:returnBackAmount,
                       addBackAmount:addBackAmount,
                       paied:paied || String.parseInt(paied),
                       returnBack:returnBack,
                       addBack:addBack,
                     }
                   })
                 },()=>{
                   console.log("根据某个顾客ID查询所有的订单promise出错");
                 })
    }})
})
//修改购物车中的普通商品
router.post("/cart/edit",function(req,res,next){
  var customerId=req.cookies.customerId || '',
      target = req.body.id,
      newdata = req.body.newdata;
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
  customer.updateOne(
   { _id: customerId, "DoorGoodscart._id": target },
   { $set: {
    // "DoorGoodscart.$" : newdata,
     "DoorGoodscart.$.spec" : spec,
     "DoorGoodscart.$.name" : newdata.name,
     "DoorGoodscart.$._id" :  target,
     "DoorGoodscart.$.color" : newdata.color,
     "DoorGoodscart.$.wall" : newdata.wall,
     "DoorGoodscart.$.material" : newdata.material,
     "DoorGoodscart.$.unit" : newdata.unit,
     "DoorGoodscart.$.doorLine" : newdata.doorLine,
     "DoorGoodscart.$.number" : newdata.number,
     "DoorGoodscart.$.price" : newdata.price,
     "DoorGoodscart.$.remark" : newdata.remark,
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
        var newData = {$set:{paied:(paied+money)}};
        customer.update(oldValue,newData,function(err5,result){
          if(err5){
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
//订单页面的分页处理
router.get("/pagination",function(req,res,next){
  var currentPage = parseInt(req.query.currentPage),
      pageSize = parseInt(req.query.pageSize);
  var querry = customer.find().sort({"ID":1}).skip((currentPage-1)*pageSize).limit(pageSize);
  querry.exec(function(err,doc){
    if(err){
      res.json({
        status:"1",
        message:err.message
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
        var allInt=parseInt(item.all);
        var paiedInt=parseInt(item.paied);
        if(item.status==1){
          customer[index].status="作废订单";
        }else{
          if(allInt>paiedInt){
            customer[index].status="欠款";
            customer[index].owned=allInt-paiedInt;
          }
          if(allInt==paiedInt){
            customer[index].status="完成";
            customer[index].owned=0;
          }
          if(allInt<paiedInt){
            customer[index].status="出错订单";
          }
        }
      })
      res.json({
        status:'1',
        msg:'get all order suecess!',
        result:{
          count:doc.length,
          customers:customer
        }
      })
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
  // var time = req.body.time;
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
            role:managerDoc.role,
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
