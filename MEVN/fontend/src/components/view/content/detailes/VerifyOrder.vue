<template>
  <div class="">
    <div class="personal-info">
      <h2>   刘联友 </h2><span>赵湾镇 &nbsp &nbsp</span><span>15929159416</span>
    </div>
    <div class="">
      <span>2017-08-23</span>
    </div>
    <Verify-general></Verify-general>
    <Verify-door></Verify-door>
    <div class="">
      合计:
    </div>

   <br>
   <el-form>
   <el-form-item>
     <el-button type="primary" @click="onSubmit">立即创建</el-button>
     <el-button>取消</el-button>
   </el-form-item>
 </el-form>
  </div>
</template>

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
      }
    }
  }
</script>
