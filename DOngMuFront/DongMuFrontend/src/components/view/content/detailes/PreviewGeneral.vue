<template lang="html">
<div class="preview">
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="4"><div class="grid-content bg-purple">品名及规格(单位)</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div>单价</el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light">数量</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light">金额（元）</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"><el-button type="text" icon="edit"  @click="ordergenenalchange()"></el-button></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"><el-button type="text" icon="delete"  @click="ordergenenaldelete()"></el-button></div></el-col>
  </el-row>
  <div class="">
    备注:
  </div>

  <el-dialog title="修改普通销货清单" :visible.sync="dialogFormVisible">
    <order-genenal-template></order-genenal-template>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import orderGenenalTemplate from './OrderGenenalTemplate.vue'

export default {
  components:{
    orderGenenalTemplate
  },
  data () {
    return {
      dialogFormVisible: false
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    ordergenenalchange(){
      this.dialogFormVisible=true;
      console.log(index, row);
    },
    ordergenenaldelete(){
      console.log("delete");
    }
  },
}
</script>

<style lang="css">
.preview:hover{
  border: 10px;
}
</style>
