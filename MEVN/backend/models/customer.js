var mongoose = require("mongoose");

var customserSchema = new mongoose.Schema({
  "customerId":String,
  "usePwd":String,
  "name":String,
  "phone":String,
  "address":Array,
  "all":Number,//总的金额
  "paied":String,//已经付款金额
  "status":String,//订单状态0表示正常1表示作废（顾客没拿货）
  "generalGoodscart":[ //普通销售清单
    {
      "id":String,
      "salePrice":String,// 实际上卖的金额
      "saleNumber":Number,//卖的数量
    }
  ],
  "DoorGoodscart":[ //定们单
      {
      "spec":String,//型号
      "name":String,//产品名称
      "color":String,//油漆颜色
      "doorway":String,//门扇尺寸－高×宽
      "wall": String,//门洞尺寸－高×宽×墙厚
      "material": String,//材质
      "unit": String,//单位
      "doorLine":String,//门套线类型
      "number":Number,//数量
      "price":String,//金额（元）
      "remark":String,//备注
    }],
  "orderList":[{
    "owner":String,//哪个店员下的单
    "generalGoodsOrder":[ //普通销售清单
      {
        "id":String,
        "salePrice":String,// 实际上卖的金额
        "saleNumber":Number,//卖的数量
      }
    ],
    "DoorGoodsOrder":[ //定们单
      {
        "spec":String,//型号
        "name":String,//产品名称
        "color":String,//油漆颜色
        // "doorway":String,//门扇尺寸－高×宽
        "wall": String,//门洞尺寸－高×宽×墙厚
        "material": String,//材质
        "unit": String,//单位
        "doorLine":String,//门套线类型
        "number":Number,//数量
        "price":String,//金额（元）
        "remark":String,//备注
    }],
  }],
  "returnBack":[{
    "orderId":String,
    "ProId":String,
    "number":Number,
    "orderListId":String,
  }], //退货
  "addBack":[{
    "orderId":String,
    "ProId":String,
    "number":Number,
    "orderListId":String,
  }] // 补货
});

module.exports=mongoose.model("customer",customserSchema)
