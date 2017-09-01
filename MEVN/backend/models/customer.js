var mongoose = require("mongoose");

var customserSchema = new mongoose.Schema({
  "customerId":String,
  "usePwd":String,
  "name":String,
  "phone":String,
  "address":Array,
  "cartList":{
    "generalGoods":[
      {
        "GoodsListId":String,
        "time":String,
        "lists":[
          {
            "productId": Array,
            // 实际上卖的金额
            "salePrice":String,
            "number":String,
          }
        ]
      }
    ],
    "DoorGoods":[
      {
        "GoodsListId":String,
        "time":String,
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
            "number":int,
            "price":double,
            "remark":String,
            "number":String
          }
        ]
      }
    ]
  }
});

module.exports=mogoose.model("customer",customserSchema)