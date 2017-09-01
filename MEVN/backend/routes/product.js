var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var product = require('../models/product.js');

//添加商品
router.post("/insert",function(req,res,next){

})
// 加入购物车
router.post("/addcart",function(req,res,next){
  var customerId="";

})

module.exports=router;
