var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  "id":String,
  "name":String,
  "spec":String,
  "price":double,
  "minNUm":int,
  "num":int,
  "buyPrice":double,
  "classification":String,
  "img":String
})

module.exports = mongoose.model("product",productSchema);
