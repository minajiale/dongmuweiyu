<template>
  <div class="ChangeProducts">
    <slot name="header"></slot>
    <el-form :model="form" class="">
        <el-form-item label="产品名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" v-on:change="formChange()" auto-complete="off"　placeholder="该ＩＤ自动生成"　></el-input>
        </el-form-item>
        <el-form-item label="货号" :label-width="formLabelWidth">
          <el-input v-model="form.code" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="规格" :label-width="formLabelWidth">
          <el-input v-model="form.spec" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="进价" :label-width="formLabelWidth">
          <el-input v-model="form.buyPrice" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="卖价" :label-width="formLabelWidth">
          <el-input v-model="form.sellPrice" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="剩余库存" :label-width="formLabelWidth">
          <el-input v-model="form.num" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="最小库存" :label-width="formLabelWidth">
          <el-input v-model="form.minNUm" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类" :label-width="formLabelWidth">
          <el-cascader
            placeholder="试试搜索：指南"
            :options="options"
            expand-trigger="hover"
            v-model="classTemp"
            filterable
          ></el-cascader>
          <!-- <el-input v-model="form.minNUm" auto-complete="off"></el-input> -->
        </el-form-item>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList2"
        list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
     </el-upload>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button　 @click="onSuspend">取消</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      classTemp:[],//分类的处理的变量
      form:{
        id:"String",
        name:"String",
        code:"String", //商品货号
        spec:"String", //规格
        sellPrice:"String",//规定卖价
        buyPrice:"String", //成交价格
        minNUm:"String", //最小库存
        num:"String", //剩余数量
        firstClass:"String", //第一级别分类
        secondClass:"String", //第二季别分类
        img:[], //图片
        desc:"String",//商品简单描述
      },
      options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
          }, {
            value: 'daohang',
            label: '导航',
          }]
        }],
      value1: '',
      value2: '',
      formLabelWidth: '120px',
      fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  props:{
    isChange:Boolean,
    prodictInit:Object,
  },
  computed:{
  },
  watch: {
    // 如果 `classTemp` 发生改变，这个函数就会运行
    classTemp: function (newQuestion) {
      this.resolveClassTemp()
    }
  },
  mounted: function(){
    this.getClass();
  },
  methods: {
    resolveClassTemp(){
      this.form.firstClass=this.classTemp[0];
      this.form.secondClass=this.classTemp[1];
      console.log("this.form.secondClass"+this.form.secondClass);
    },
    getClass(){
      axios({
        url:'/class',
      }).then(res=>{
        var data = res.data.result.allClass;
        data.forEach((item,index,array)=>{
          this.options[index]={};
          this.options[index].value = item._id;
          this.options[index].label = item.label;
          var temp =index;
          this.options[index].children=[];

          if(item.children.length != 0){
            item.children.forEach((item,index,array)=>{
              this.options[temp].children[index]={}
              this.options[temp].children[index].value=item._id;
              this.options[temp].children[index].label=item.label;
            })
          }
        })
      },error=>{
        console.log("error");
      })
    },
    onSubmit(){
      this.transferProducts();
      this.$emit('changeDialogFormVisible');
    },
    onSuspend(){
      this.$emit('changeDialogFormVisible');
      this.$alert('取消插入商品', '请确认操作', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
    transferProducts(){
      if(this.isChange == true){
        console.log("修改产品");
        this.editProduct();
        // console.log("ChangeProducts"+this.theProduct._id);
      }else{
        console.log("增加产品");
        this.insertProduct();
      }
    },
    editProduct(){
      axios({
        method: 'post',
        url:'/products/edit',
        data:{
         oneProduct:this.form,
        }
      }).then(res=>{
        if(res.data.status ==0){
          this.$notify({
            title: '成功',
            message: '修改商品信息成功',
            type: 'success'
          });
        }else{
          this.$message.error('修改商品失败');
        }
      },error=>{
        console.log("error");
        this.$message.error('修改商品失败');
      })
    },
    insertProduct(){
      axios({
        method: 'post',
        url:'/products/insert',
        data:{
          oneProduct:this.form,
        }
      }).then(res=>{
        this.$notify({
           title: '成功',
           message: '新增产品成功',
           type: 'success'
         });
      },error=>{
        console.log("error");
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    formChange(values){
    },
  },
  activated:function(){
    this.form = this.prodictInit;
  },
}
</script>
<style>
  .ChangeProducts .el-form-item{
    width: 600px;
  }
  .el-form-item{
    margin-bottom: 2px;
    width: 800px;
  }
  .el-upload-list__item{
    width: 110px;
    margin: 0 3px;
  }
  .el-upload-list{
    display: flex;
  }
</style>
