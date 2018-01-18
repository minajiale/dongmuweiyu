var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  "id":String,
  "name":String,
  "code":String, //商品货号
  "spec":String, //规格
  "sellPrice":String,//规定卖价
  "buyPrice":String, //成交价格
  "minNUm":String, //最小库存
  "num":String, //剩余数量
  "firstClass":String, //第一级别分类
  "secondClass":String, //第二季别分类
  "img":[], //图片
  "desc":String,//商品简单描述
  "sales":[{
    "month":String,
    "salesNumber":String
  }],     //月销售量
  "salesNumbers":String,//总销售额
})

module.exports = mongoose.model("product",productSchema);
