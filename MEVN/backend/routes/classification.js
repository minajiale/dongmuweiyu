var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var classification = require('../models/classification');

mongoose.connect('mongodb://127.0.0.1:27017/DONGMU');
mongoose.connection.on("connected",function(){
  console.log("mongoose connect sucess!!!");
})
mongoose.connection.on("error",function(){
  console.log("mongoose connect fail!!!");
})
mongoose.connection.on("disconnected",function(){
  console.log("mongoose connect disconnected!!!");
})

//取得所有的分类
router.get("/",function(req,res,next){
  classification.find({},function(err,doc){
    if(err){
      res.json({
        status:'0',
        msg:err.message
      });
    }else{
      res.json({
        status:'1',
        msg:'get all classification suecess!',
        result:{
          count:doc.length,
          allClass:doc
        }
      })
    }
  })
})


//插入某个二级分类
router.post("/insertSecond",function(req,res,next){
  let father = req.body.father || '',
      name = req.body.name || '';
    console.log("插入某个二级分类")
    let  sencondClass={
      "label":name
    }
    classification.findOne({_id:father},function(err,doc){
      if(err){
        res.json({
          status:"1",
          message:err.message
        });
      }else{
        if(doc){
          doc.children.push(sencondClass);
          doc.save(function(err2,doc2){
            if(err2){
              res.json({
                status:"1",
                message:err2.message
              });
            }else{
              res.json({
                status:"0",
                msg:"",
                result:"sucess"
              })
            }
          })
        }
      }
    })
})
//插入某个一级分类
router.post("/insertFirst",function(req,res,next){
  let father = req.body.father || '',
      name = req.body.name || '';

    if(father=='' && name){
      console.log("插入某个一级分类")

      let classificationOne=
        {
          "key":2,
          "label":name,
          "children":[]
        };
      // classificationOne.save(function(err3,classification){
      //   if(err3){
      //     res.json({
      //       status:"1",
      //       message:err3.message
      //     });
      //   }else{
      //     res.json({
      //       status:"0",
      //       msg:"",
      //       result:"sucess"
      //     })
      //   }
      // });
      classification.create(classificationOne,function(err3,classification){
          if(err3){
            res.json({
              status:"1",
              message:err3.message
            });
          }else{
            res.json({
              status:"0",
              msg:"",
              result:"sucess"
            })
          }
      })
    }else{
      console.log("params err!");
    }
})
module.exports = router;
