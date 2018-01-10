<template>
  <div id="top-menu" class="top">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="index" class="tittle">东牧卫浴后台管理系统</el-menu-item>
  <el-menu-item index="" ><a href="https://d.weidian.com/loginNew/#/login/loginMain">微店</a> </el-menu-item>
  <el-dropdown @command="customerCommand" class="customer">
    <span class="el-dropdown-link">
      当前操作顾客：{{customerName}}
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
      <el-dropdown-item command="me">顾客中心</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

  <el-dropdown @command="handleCommand" class="personality">
    <span class="el-dropdown-link">
      <img class="user-logo" width="23px" height="23px" src="../../../assets/logo.png">
      {{username}}
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
      <el-dropdown-item command="me">个人中心</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</el-menu>

  </div>
</template>
<style>
.customer{
  margin: 20px 300px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
  .tittle{
    font-size: 20px;
    padding-left: 100px;
  }
  .top .personality{
    display: block;
    position: relative;
    top: 10px;
    right: 50px;
    float: right;
    text-align: center;
    margin: 0,auto;
    color: white;
  }
  .top .personality span{
    color: white
  }
  .top .customer{
    width: 200px;
  }
  .top .customer span{
    color: #bfcbd9;
  }
</style>
<script>
import axios from "axios"
    export default {
        data() {
            return {
              username:'',
              // customerName:''
            }
        },
        computed:{
            customerName(){
                  return this.$store.state.customerName
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    //TO-DO 清除cookie
                    axios.post("/manager/loginOut").then((response)=>{
                      let res=response.data;
                      if(res.status == 0){
                        this.$router.push('/login');
                        this.$store.commit("updateManager","");
                      }else{
                        this.$message.error('退出登录失败');
                      }
                    })
                }
            },
          updateMessage(){
            this.username=this.getCookie("managerName");
            this.$store.commit('updatecustomerName',this.getCookie("customerName"))
          },
        },
    mounted (){
      this.updateMessage();
    },
    }
</script>
