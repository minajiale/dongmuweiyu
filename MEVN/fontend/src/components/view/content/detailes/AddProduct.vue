<template>
  <div class="">
    <h2>新增商品</h2>
    <el-form :model="form">
        <el-form-item label="产品名称" :label-width="formLabelWidth">
          <el-input v-model="form.id" auto-complete="off"　placeholder="该ＩＤ自动生成"　></el-input>
        </el-form-item>
        <el-form-item label="货号" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="规格" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="进价" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="卖价" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="剩余库存" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="最小库存" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
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
export default {
  data() {
    return {
      value1: '',
      value2: '',
      form: {
        id:'',
        time:'',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  methods: {
    onSubmit(){
      this.$notify({
         title: '成功',
         message: '新增产品成功',
         type: 'success'
       });
    },
    onSuspend(){
      this.$notify({
        title: '警告',
        message: '取消添加商品',
        type: 'warning'
    });
    this.$router.push('/order');
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
