<template lang="html">
<div class="preview">
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="4"><div class="grid-content bg-purple">型号(颜色)</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div>门洞尺寸(高宽墙厚)</el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light">门套线类型</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light">门扇尺寸(高宽)</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div>数量</el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light">金额（元）</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"><i class="el-icon-edit"></i></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"><i class="el-icon-delete"></i></div></el-col>
  </el-row>
  <div class="">
    备注:
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.preview:hover{
  border: 10px;
}
</style>
