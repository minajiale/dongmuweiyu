<template>
    <div class="login-wrap">
        <div class="ms-title">东牧卫浴后台管理系统</div>
        <div class="ms-login">
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
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
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
                }
            }
        },
        methods: {
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
                          this.$router.push('/');
                          console.log(this.ruleForm);
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
            }
        }
    }
</script>

<style scoped>
</style>
