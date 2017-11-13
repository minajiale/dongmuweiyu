var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  "id":String,
  "name":String,
  "code":String,
  "spec":String,
  "sellPrice":String,
  "minNUm":String,
  "num":String,
  "buyPrice":String,
  "firstClass":String,
  "secondClass":String,
  "img":String
})

module.exports = mongoose.model("product",productSchema);
