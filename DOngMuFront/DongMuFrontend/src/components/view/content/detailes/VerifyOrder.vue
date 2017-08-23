<template>
  <div class="">
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

  export default {
    components:{
      VerifyDoor
    },
    data() {
      return {
      }
    }
  }
</script>
