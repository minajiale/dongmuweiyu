<template>
  <div class="">
  <el-form :model="form">
    <el-form-item label="订单号" :label-width="formLabelWidth">
      <el-input v-model="form.id" auto-complete="off"　placeholder="该ＩＤ自动生成"　></el-input>
    </el-form-item>
    <el-form-item label="订单日期" :label-width="formLabelWidth">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
  </el-form-item>
    <el-form-item label="顾客姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="订单状态" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="预付定金">
        <el-option label="欠款" value="shanghai"></el-option>
        <el-option label="完结" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
  <el-button type="primary" @click="onSubmit">提交</el-button>
  <el-button>取消</el-button>
</el-form-item>
  </el-form>
    </div>
</template>

<script>
export default {
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
      value1: '',
      value2: '',
      form: {
        id:'',
        time:'',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    onSubmit(){
      this.$router.push('/order/addOrder/verify');
    }
  }
}
</script>
