<template>
  <div class="">
    <slot name="header"></slot>
    <el-form :model="form" class="ChangeProducts">
        <el-form-item label="产品名称" :label-width="formLabelWidth">
          <el-input v-model="form.id" auto-complete="off"　placeholder="该ＩＤ自动生成"　></el-input>
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
        <slot name="footer"></slot>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      form: {
        "id":"",
        "name":"",
        "spec":"",
        "sellPrice":"",
        "minNUm":"",
        "num":"",
        "buyPrice":"",
        "classification":"",
        "img":""
      },
      formLabelWidth: '120px',
      fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  props:{
    isChange:Boolean,
  },
  methods: {
    transferProducts(){
      if(this.isChange == true){
        console.log("修改产品")
      }else{
        console.log("增加产品")
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>
<style>
  .ChangeProducts .el-form-item{
    width: 700px;
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
