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

//取得所有的分类并进行格式化
router.get("/",function(req,res,next){
  var data=[];
  classification.find({},function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else{
      // 进行数据格式化
      var a=0;
      for(let i in doc){
        if(doc[i].father == null){
          data[a] = {};
          data[a].label=doc[i].name;
          data[a].id=doc[i].id;
          var b=0;
          for(let j in doc[i].children){
            let targrt = doc[i].children[j];
            console.log(targrt);
            //二分法查找

            for(let k in doc){
              if(doc[k]._id == doc[i].children[j]){
                data[a].children[b].label = doc[k].name;
                data[a].children[b].id = doc[k]._id;
                b++;
              }
            }
          }
          a++
        }
      }

      res.json({
        status:'0',
        msg:'get all classification suecess!',
        result:{
          count:doc.length,
          allClass:data
        }
      })
    }
  })
})

//插入新的分类
router.post("/insert",function(req,res,next){
  // let father = req.body.params.father || '',
  //     name = req.body.params.name || '';
      let father="",
          name="花洒系列";
  // let ObjectId= mongoose.Types.ObjectId();

  //插入某个二级分类
  if(father){
    console.log("插入某个二级分类")

    let  sencondClass={
      "key":3,
      "label":name
    }
    classification.findOne({label:father},function(err,doc){
      if(err){
        res.json({
          status:"1",
          message:err.message
        });
      }else{
        console.log("classification:"+doc);
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
  }else{
    if(father=='' && name){
      //插入某个一级分类
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
    }
}
})
module.exports = router;
