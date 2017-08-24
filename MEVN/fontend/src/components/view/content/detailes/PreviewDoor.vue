<template lang="html">
<div class="preview">
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="4"><div class="grid-content bg-purple">型号(颜色)</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div>门洞尺寸(高宽墙厚)</el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light">门套线类型</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light">门扇尺寸(高宽)</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div>数量</el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light">金额（元）</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"><el-button type="text" icon="edit"  @click="orderdoorchange()"></el-button></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"><el-button type="text" icon="delete"  @click="orderdoordelete()"></el-button></div></el-col>
  </el-row>
  <div class="">
    备注:
  </div>

  <el-dialog title="修改普通销货清单" :visible.sync="dialogFormVisible">
    <order-door-template></order-door-template>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import orderDoorTemplate from './OderDoorTemplate.vue'

export default {
  data () {
    return {
      dialogFormVisible: false

    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    orderdoorchange(){
      this.dialogFormVisible=true;
      console.log(index, row);
        },
    orderdoordelete(){
      console.log("delet")
    }
  },
  components: {
    orderDoorTemplate
  }
}
</script>

<style lang="css">
.preview:hover{
  border: 10px;
}
</style>
