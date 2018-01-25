<template>
  <div id="rightMenu" class="rightMenu">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->

    <el-row class="tac" >
      <el-col :span="4">
        <el-menu default-active="/norder" class="el-menu-vertical-demo" unique-opened @open="handleOpen" @close="handleClose" router>
          <el-badge :value="12" class="item">
            <el-menu-item index="/nalarm"><i class="el-icon-message"></i>提醒服务</el-menu-item>
          </el-badge>
          <el-menu-item index="/nproducts"><i class="el-icon-menu"></i>产品管理</el-menu-item>
          <el-menu-item index="/norder"><i class="el-icon-setting"></i>订单管理</el-menu-item>
        </el-menu>
      </el-col>
      </el-col>
  </el-row>
</div>
</template>

<script type="text/javascript">
export default{
  data(){
    return {
      isCollapse: true
    }
  },
  // mounted:function(){
  //   this.$router.push('/order');
  // },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
.rightMenu{
  display: block;
  position: absolute;
  width: 880px;
  top: 60px;
  left: 0;
  bottom:0;
}
.rightMenu .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  min-height: 400px;
}
</style>
