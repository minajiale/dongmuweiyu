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
      <el-dropdown-item command="loginoutC">退出登录</el-dropdown-item>
      <el-dropdown-item command="customer"> <router-link to="/customerCenter">顾客中心</router-link> </el-dropdown-item>
      <el-dropdown-item command="customer"> <router-link to="/order/addOrder">登录</router-link> </el-dropdown-item>
      <el-dropdown-item command="cart">购物车</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

  <el-dropdown @command="handleCommand" class="personality">
    <span class="el-dropdown-link">
      <img class="user-logo" width="23px" height="23px" src="../../../assets/logo.png">
      {{username}}
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
      <el-dropdown-item command="me"><router-link to="/managerCenter">个人中心</router-link></el-dropdown-item>
      <el-dropdown-item command="customer"> <router-link to="/login">登录</router-link> </el-dropdown-item>
      <el-dropdown-item command="register"> 注册</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</el-menu>


<el-dialog title="注册新的店员" :visible.sync="register">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model.number="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="您的身份" prop="identity">
        <el-radio-group v-model="ruleForm.role">
          <el-radio label=0>店主</el-radio>
          <el-radio label=1>店员</el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      </div>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="addCartVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleCart">确 定</el-button>
  </div>
</el-dialog>
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
              register:false,
              ruleForm: {
                  username: '',
                  password: '',
                  phone:'',
                  role:''
              },
              rules: {
                  username: [
                      { required: true, message: '请输入用户名', trigger: 'blur' }
                  ],
                  password: [
                      { required: true, message: '请输入密码', trigger: 'blur' }
                  ]
              },
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
          submitForm(formName) {
              const self = this;
              self.$refs[formName].validate((valid) => {
                  if (valid) {
                      localStorage.setItem('ms_username',self.ruleForm.username);
                      this.$http({
                        method: 'post',
                        url:'/manager/register',
                        data:{
                          oneProduct:this.ruleForm,
                        }
                      }).then(res=>{

                      },error=>{
                        console.log("error");
                        this.$notify.error({
                          title: '错误',
                          message: '注册失败'
                        });
                      })
                  } else {
                      console.log('error submit!!');
                      return false;
                  }
              });
          },
          customerCommand(command){
            if(command=="loginoutC"){
              axios.post("/customer/loginOut").then((response)=>{
                let res=response.data;
                if(res.status == 0){
                  this.$router.push('/order/addOrder');
                  this.$store.commit("updatecustomerName","");
                }else{
                  this.$message.error('退出登录失败');
                }
              })
            }
            if(command=="cart"){
                this.$router.push('/order/addOrder/verify');
            }
          },
          handleCommand(command) {
              if(command == 'loginout'){
                  //TO-DO 清除cookie
                  axios.post("/manager/loginOut").then((response)=>{
                    let res=response.data;
                    if(res.status == 0){
                      this.$router.push('/');
                      this.$store.commit("updateManager","");
                    }else{
                      this.$message.error('退出登录失败');
                    }
                  })
              }
              if(command=="me"){
                console.log("me");
              }
              if(command == "register"){
                this.register =true;
              }
          },
          updateMessage(){
          this.username=this.getCookie("managerName");
          var customerId = this.getCookie("customerId")
          if(customerId != undefined &&  customerId != -1){
            this.$http({
              url:"/customer/oneCustomer"
            }).then(res=>{
              this.$store.commit('updatecustomerName',res.data.result.cus.name)
            },error=>{
              this.$notify.error({
                title: '错误',
                message: '获取订单列表失败'
              });
            })
          }
        },
        },
    mounted (){
      this.updateMessage();
    },
    }
</script>
