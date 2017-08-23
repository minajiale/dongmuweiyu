<template>
  <div class="order">
    <el-row type="flex" class="row-bg" justify="end">
      <el-button type="text" :disabled="false">+新增定门单</el-button>
    </el-row>
    <preview-general></preview-general>
    <order-genenal-template></order-genenal-template>
</div>
</template>
<script>
import previewGeneral from './PreviewGeneral.vue'
import orderGenenalTemplate from './OrderGenenalTemplate.vue'

  export default {
    components:{
      previewGeneral,
      orderGenenalTemplate
    },
    data() {
      return {
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
