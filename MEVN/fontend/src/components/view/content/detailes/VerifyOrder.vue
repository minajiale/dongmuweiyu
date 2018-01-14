<template>
  <div class="">
    <div class="personal-info">
      <h2> 刘联友 </h2><span>赵湾镇 &nbsp &nbsp</span><span>15929159416</span>
    </div>
    <div class="">
      <span>2017-08-23</span>
    </div>
    <Verify-general @generalAomunt="getGeneralAomunt"></Verify-general>
    <div class="style">

    </div>
    <Verify-door @doorAomunt="getDoorAmount"></Verify-door>
    <div class="">
      合计:{{this.allAmount}}
    </div>
   <el-form>
   <el-form-item>
     <el-button type="primary" @click="onSubmit">立即创建</el-button>
     <el-button>取消</el-button>
   </el-form-item>
 </el-form>
 <el-dialog title="创建订单" :visible.sync="createOrder">
   <el-form :model="orderStatus">
     <el-form-item label="定金（元）">
       <el-input v-model="orderStatus.status" auto-complete="off"></el-input>
     </el-form-item>
   </el-form>
   <div slot="footer" class="dialog-footer">
     <el-button @click="addCartVisible = false">取 消</el-button>
     <el-button type="primary" @click="handleCart">确 定</el-button>
   </div>
 </el-dialog>
  </div>
</template>
<style media="screen">
  .style{
    height: 30px;
  }
</style>
<script>
import VerifyDoor from './VerifyDoor.vue'
import VerifyGeneral from './VerifyGeneral.vue'

  export default {
    components:{
      VerifyDoor,
      VerifyGeneral
    },
    data() {
      return {
        allAmount:0,
        orderStatus:{
          status:1000
        },
        createOrder:false
      }
    },
    methods: {
      getGeneralAomunt(generalAmount){
        this.allAmount+=generalAmount
        console.log("generalAmount"+generalAmount);
      },
      getDoorAmount(doorAmount){
        this.allAmount+=doorAmount
        console.log("doorAmount"+doorAmount);
      },
      onSubmit(){
        this.createOrder=true;
      },
      handleCart(){
        this.createOrder=false
        this.$http({
          method:"post",
          url:"/customer/createOrder",
          data:{
            paied:this.orderStatus.status,
            allAmount:this.allAmount
          }
        }).then(res=>{
          this.$notify({
             title: '成功',
             message: '创建订单成功',
             type: 'success'
           });
        },error=>{
          this.$notify.error({
            title: '错误',
            message: '加入购物车失败'
          });
        })
      }
    }
  }
</script>
