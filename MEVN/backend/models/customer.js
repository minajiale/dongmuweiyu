var mongoose = require("mongoose");

var customserSchema = new mongoose.Schema({
  "owner":String,//哪个店员下的单
  "customerId":String,
  "usePwd":String,
  "name":String,
  "phone":String,
  "address":Array,
  "generalGoodscart":[ //普通销售清单
    {
      "id":String,
      "salePrice":String,// 实际上卖的金额
      "saleNumber":String,//卖的数量
    }
  ],
  "DoorGoodscart":[ //定们单
      {
      "spec":String,//型号
      "color":String,//颜色
      "doorwayHeight":String,//门扇尺寸－高
      "doorwayWidth":String,//门扇尺寸－宽
      "wallHeight": String,//门洞尺寸－高
      "wallWidth": String,//门洞尺寸－宽
      "wall":String,     //门洞尺寸－墙厚
      "doorLine":String,//门套线类型
      "number":String,//数量
      "price":String,//金额（元）
      "remark":String,//备注
    }],
  "orderList":[{

    "GoodsListId":String, //普通销售清单ID
    "time":String,  //生成该张订单事件
    "generalGoods":[ //普通销售清单
      {
        "id":String,
        "salePrice":String,// 实际上卖的金额
        "saleNumber":String,//卖的数量
      }
    ],
    "DoorGoods":[ //定们单
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
