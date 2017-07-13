<template>
  <div id="rightMenu" class="rightMenu">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu default-active="analyse" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
          <el-menu-item index="analyse"><i class="el-icon-star-on "></i>统计</el-menu-item>
          <el-menu-item index="alarm"><i class="el-icon-message"></i>提醒服务</el-menu-item>
          <el-submenu index="productions">
            <template slot="title"><i class="el-icon-menu"></i>产品管理</template>
            <el-menu-item-group>
              <el-menu-item index="productions">产品管理</el-menu-item>
              <el-menu-item index="classification">产品分类管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="orders"><i class="el-icon-setting"></i>订单管理</el-menu-item>
          <el-menu-item index="peoplemanage"><i class="el-icon-picture"></i>人员管理</el-menu-item>
        </el-menu>
      </el-col>
      </el-col>
  </el-row>
</div>
</template>

<script type="text/javascript">
export default{
  computed:{
      onRoutes(){
          return this.$route.path.replace('/','');
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
</style>
