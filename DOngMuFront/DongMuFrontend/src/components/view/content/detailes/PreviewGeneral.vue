<template lang="html">
<div class="preview">
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="4"><div class="grid-content bg-purple">品名及规格(单位)</div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div>单价</el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light">数量</div></el-col>
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
