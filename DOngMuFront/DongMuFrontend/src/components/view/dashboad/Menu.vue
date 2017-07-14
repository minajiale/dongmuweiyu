<template>
  <div id="rightMenu" class="rightMenu">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu default-active="/analyse" class="el-menu-vertical-demo" unique-opened @open="handleOpen" @close="handleClose" router>
          <el-menu-item index="/analyse"><i class="el-icon-star-on "></i>统计</el-menu-item>
          <el-badge :value="12" class="item">
            <el-menu-item index="/alarm"><i class="el-icon-message"></i>提醒服务</el-menu-item>
          </el-badge>
          <el-menu-item index="/products"><i class="el-icon-menu"></i>产品管理</el-menu-item>
          <el-menu-item index="/order"><i class="el-icon-setting"></i>订单管理</el-menu-item>
          <el-menu-item index="/classification"><i class="el-icon-minus"></i>产品分类管理</el-menu-item>
          <el-menu-item index="/peoplemanage"><i class="el-icon-picture"></i>人员管理</el-menu-item>
        </el-menu>
      </el-col>
      </el-col>
  </el-row>
</div>
</template>

<script type="text/javascript">
export default{
  // computed:{
  //     onRoutes(){
  //         return this.$route.path.replace('/','');
  //     }
  // }
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
</style>
