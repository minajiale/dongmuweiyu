var mongoose = require("mongoose");

var customserSchema = new mongoose.Schema({
  "owner":String,//哪个店员下的单
  "customerId":String,
  "usePwd":String,
  "name":String,
  "phone":String,
  "address":Array,
  "cartList":[{
    "GoodsListId":String, //普通销售清单ID
    "time":String,  //生成该张订单事件
    "generalGoods":[ //普通销售清单
      {
        "lists":[
          {
              "id":String,
              "salePrice":String,// 实际上卖的金额
              "saleNumber":String,//卖的数量
          }
        ]
      }
    ],
    "DoorGoods":[ //定们单
      {
        "GoodsListId":String,
        "time":String,  //生成该张订单事件
        "lists":[
          {
            "spec":String,
            "doorway":{
              "height":String,
              "width":String,
            },
            "wall":{
              "height":String,
              "width":String,
            },
            "doorLine":String,
            "number":String,
            "price":String,
            "remark":String,
            "number":String
          }
        ]
      }
    ],
    //每次修改订单的记录
    "modifyRecord":[
      {
        "time":String,
        "record":String
      }
    ]
  }]
});

module.exports=mongoose.model("customer",customserSchema)
