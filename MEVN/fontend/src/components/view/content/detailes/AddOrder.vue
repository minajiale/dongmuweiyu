<template>
  <div class="">
    <br>
    <br>
  <el-form :model="form">
    <el-row :gutter="15">
      <el-col :span="8"><el-form-item label="订单日期" :label-width="formLabelWidth" >
      <el-date-picker
        v-model="form.time"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
      </el-form-item></el-col>
  </el-row>
  <el-row :gutter="3">
     <el-col :span="8"><el-form-item label="顾客姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item></el-col>
    <el-col :span="8"> <el-form-item label="顾客电话" :label-width="formLabelWidth">
   <el-input v-model="form.phone" auto-complete="off"></el-input>
    </el-form-item></el-col>
      <el-col :span="12"><el-form-item label="顾客住址" :label-width="formLabelWidth">
        <el-input v-model="form.address" auto-complete="off"></el-input>
    </el-form-item></el-col>
  </el-row>
<br>

    <el-form-item class="customerSumit">
      <el-button type="warning" @click="onLogin">注册</el-button>
      <el-button　 @click="loginSuspend">取消</el-button>
      <span>
        注意：此处的填写的如果和电话和姓名均相同，则会添加到同一个的消费记录中。
      </span>
    </el-form-item>
    <div class="clear">  </div>
    <el-collapse accordion>
      <el-collapse-item title="定门单" name="1">
        <order-door></order-door>
      </el-collapse-item>
    </el-collapse>
    <p>
      <router-link to="/products"><i class="el-icon-arrow-right "></i>普通销售清单</router-link>
    </p>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">预览</el-button>
      <el-button>取消</el-button>
    </el-form-item>
</el-form>
  </div>
</template>

<script>
import orderDoor from './OderDoor.vue'
export default {
  components:{
    orderDoor
    },
  data() {
    return {
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      pickerOptions1: {
         shortcuts: [{
           text: '今天',
           onClick(picker) {
             picker.$emit('pick', new Date());
           }
         }]
       },
      form: {
        id:'',
        phone:'',
        address:'',
        time:'',
        name: '',
        type: [],
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    costomerSearch(phoneNumber){
      this.$http({
        url:'/customer/searchCostomer',
        params:{
          phone:phoneNumber
        },
      }).then(res=>{
        var data=res.data.result;
        if( res.data.status != 0){
          this.$confirm('该用户已经存在, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            var customerId=data.customerId;
            //登录
            this.customerLogin(customerId);
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消添加'
            });
          });
          this.tableData5 = res.data.result.allProducts;
        }else{
          //没找到该顾客
          this.customerRegister()
        }
      },error=>{
        this.$notify.error({
          title: '错误',
          message: '服务器出错请联系管理员：13177918633'
        });
      })
    },
    //顾客登录
    customerLogin(customerId){
      console.log(customerId);
      this.$http({
        method:'post',
        url:'/customer/login',
        data:{
          customer:customerId,
          time:this.form.time
        }
      }).then((res)=>{
        //并且改变store中的customerName的值
        var customername = res.data.result.managerName;
        this.$store.commit('updatecustomerName',customername);
        this.insert(customerId);
      },(error)=>{
        this.$notify.error({
          title: '错误',
          message: '顾客登录失败'
        });
      })
    },
    //注册新的顾客
    customerRegister(){
      this.$http({
        method:"post",
        url:"/customer/register",
        data:{
          name:this.form.name,
          phone:this.form.phone,
          address:this.form.address,
        }
      }).then((res)=>{
        if(res ==0){
          this.$notify.error({
            title: '错误',
            message: '新增订单失败失败'
          });
        }else{
          console.log(res.data.result.customerId);
          this.customerLogin(res.data.result.customerId);
          this.$notify({
             title: '成功',
             message: '新增订单成功',
             type: 'success'
           });
        }
      },(error)=>{
        this.$notify.error({
          title: '错误',
          message: '新增订单失败'
        });
      })
    },
    //插入记录到_id为id的记录中
    insert(id){
      console.log(id);
    },
    //点击注册按钮
    onLogin(){
      if(this.form.name !='' || this.form.phone !=''){
      this.costomerSearch(this.form.phone);
      }else{
        this.$notify.error({
          title: '错误',
          message: '新增订单失败,姓名和电话号码不能为空'
        });
      }
    },
    loginSuspend(){
      this.form={}
    },
    onSubmit(){
      this.$router.push('/order/addOrder/verify');
    }
  }
}
</script>
<style lang="css">
.customerSumit{
  float: right;
}
.clear{
  clear: both;
}
</style>
