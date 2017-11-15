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
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
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
            submitForm(formName) {
                const self = this;
                axios.post("/manager/login")
                self.$router.push('/');
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
