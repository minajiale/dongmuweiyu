var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//定义一个Schema
var managerSchema = new Schema({
  "username":String,
  "password":String,
  "role":Boolean,//0表示店主,1表示店员
});
//将该Schema发布为Model
module.exports = mongoose.model("manager",managerSchema)
