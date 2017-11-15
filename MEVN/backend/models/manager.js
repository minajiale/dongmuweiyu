var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//定义一个Schema
var managerSchema = new Schema({
  "username":String,
  "password":String,
});
//将该Schema发布为Model
module.exports = mongoose.model("manager",managerSchema)
