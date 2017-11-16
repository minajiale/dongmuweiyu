var mongoose = require("mongoose");

var customserSchema = new mongoose.Schema({
  "customerId":String,
  "usePwd":String,
  "name":String,
  "phone":String,
  "address":Array,
  "cartList":[{
    "time":String,  //生成该张订单事件
    "generalGoods":[ //普通销售清单
      {
        "GoodsListId":String, //普通销售清单ID
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
