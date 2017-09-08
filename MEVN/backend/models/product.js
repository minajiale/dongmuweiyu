var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  "id":String,
  "name":String,
  "spec":String,
  "sellPrice":String,
  "minNUm":String,
  "num":String,
  "buyPrice":String,
  "classification":String,
  "img":String
})

module.exports = mongoose.model("product",productSchema);
