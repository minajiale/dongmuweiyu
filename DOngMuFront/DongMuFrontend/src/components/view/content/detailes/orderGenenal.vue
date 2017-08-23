<template>
  <div class="order">
    <el-row type="flex" class="row-bg" justify="end">
      <el-button type="text" :disabled="false">+新增定门单</el-button>
    </el-row>
    <Preview-general></Preview-general>

    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="品名及规格">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-row :gutter="10">
      <el-col :span="6"><el-form-item label="单位">
      <el-input v-model="form.name"></el-input>
      </el-form-item></el-col>
      <el-col :span="6"><el-form-item label="数量">
        <el-input v-model="form.name"></el-input>
      </el-form-item></el-col>
      <el-col :span="6"><el-form-item label="单价">
        <el-input v-model="form.name"></el-input>
      </el-form-item></el-col>
      <el-col :span="6"><el-form-item label="金额（元）">
        <el-input v-model="form.name"></el-input>
      </el-form-item></el-col>
    </el-row>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
</div>
</template>
<script>
import PreviewGeneral from './PreviewGeneral.vue'

  export default {
    components:{
      PreviewGeneral
    },
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
