<template>
  <div id="top-menu">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="index" class="tittle">东牧卫浴后台管理系统</el-menu-item>
  <el-menu-item index="" ><a href="https://d.weidian.com/loginNew/#/login/loginMain">微店</a> </el-menu-item>

      <el-dropdown trigger="click" @command="handleCommand" class="personality" @click="">
          <span class="el-dropdown-link">
              <img class="user-logo" width="23px" height="23px" src="../../../assets/logo.png">
              {{username}}
          </span>
      </el-dropdown>
</el-menu>



  </div>
</template>
<style>
  .tittle{
    font-size: 20px;
    padding-left: 100px;
  }
  .personality{
    display: block;
    position: relative;
    top: 10px;
    right: 50px;
    float: right;
    text-align: center;
    margin: 0,auto;
    color: white;
  }
</style>
<script>
    export default {
        data() {
            return {
                username: '刘联友'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
