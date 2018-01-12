<template>
  <div class="">
    <div class="personal-info">
      <h2>   刘联友 </h2><span>赵湾镇 &nbsp &nbsp</span><span>15929159416</span>
    </div>
    <div class="">
      <span>2017-08-23</span>
    </div>
    <Verify-general></Verify-general>
    <div class="style">

    </div>
    <Verify-door></Verify-door>
    <div class="">
      合计:
    </div>
   <el-form>
   <el-form-item>
     <el-button type="primary" @click="onSubmit">立即创建</el-button>
     <el-button>取消</el-button>
   </el-form-item>
 </el-form>
 <el-dialog title="创建订单" :visible.sync="createOrder">
   <el-form :model="orderStatus">
     <el-form-item label="定金">
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
        orderStatus:{
          status:"欠款"
        },
        createOrder:false
      }
    },
    methods: {
      onSubmit(){
        this.createOrder=true;
      }
    }
  }
</script>
