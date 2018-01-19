<template>
    <div class="login-wrap">
        <h2>东牧卫浴后台管理系统</h2>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username" lable="用户名">
                    <el-input v-model="ruleForm.username" placeholder="请填写您登录用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password"　lable="密码">
                    <el-input type="password" placeholder="请填写您的密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm() {
              const self = this;
                if(!this.ruleForm.password || !this.ruleForm.username){
                   this.$message.error('用户名和密码不能为空');
                  return
                }else{
                axios.post("/manager/login",{
                  manager:this.ruleForm,
                  methods:'post'
                }).then((res)=>{
                  if(res.data.status == '0'){
                    //成功
                    this.$store.commit("updateManager",res.data.result.managerName);
                    self.$router.push('/');
                  }else{
                    //失败
                     this.$message.error('请输入正确的用户名和密码');
                  }
                })
              }

                localStorage.token = self.ruleForm;
                self.$store.state.token = self.ruleForm;
                // self.$refs[formName].validate((valid) => {
                //     if (valid) {
                //
                //         localStorage.setItem('ms_username',self.ruleForm.username);
                //         self.$router.push('/');
                //     } else {
                //         console.log('error submit!!');
                //         return false;
                //     }
                // });
            }
        }
    }
</script>
<style>
.login-wrap{
  padding: 0 35%;
  margin: 0,auto;
  text-align: center;
}

</style>
