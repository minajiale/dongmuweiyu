var mongoose = require("mongoose");

var customserSchema = new mongoose.Schema({
  "owner":String,//哪个店员下的单
  "customerId":String,
  "usePwd":String,
  "name":String,
  "phone":String,
  "address":Array,
  "all":String,//总的金额
  "paied":String,//已经付款金额
  "status":String,//订单状态0表示完成1表示欠款-1表示作废（顾客没拿货）
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
    "generalGoodsOrder":[ //普通销售清单
      {
        "id":String,
        "salePrice":String,// 实际上卖的金额
        "saleNumber":String,//卖的数量
      }
    ],
      "DoorGoodsOrder":[ //定们单
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
  }]
});

module.exports=mongoose.model("customer",customserSchema)
