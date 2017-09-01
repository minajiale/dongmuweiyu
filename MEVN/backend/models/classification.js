var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 一级菜单：parant为null,producList为null,child为二级菜单名字
//二级菜单：parant为一级菜单名字,producList为产品id组成的数组,child为null
var classificationSchema = new Schema({
  "classificationId":String,
  "name":String,
  "parent":String,
  "children":Array,
});
module.exports = mongoose.model("classification",classificationSchema)
