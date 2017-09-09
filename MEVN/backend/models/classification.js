var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 一级菜单：parant为null,producList为null,child为二级菜单名字
//二级菜单：parant为一级菜单名字,producList为产品id组成的数组,child为null

//定义一个Schema
var classificationSchema = new Schema({
  "key":Number,
  "label":String,
  "children":[{
    "key":Number,
    "label":String
  }],
});
//将该Schema发布为Model
module.exports = mongoose.model("classification",classificationSchema)
