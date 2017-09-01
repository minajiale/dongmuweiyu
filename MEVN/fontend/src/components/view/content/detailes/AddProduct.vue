<template lang="html">
  <div class="">
    <add-product>
      <h2 slot="header">新增商品</h2>
      <div slot="footer">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button　 @click="onSuspend">取消</el-button>
        </el-form-item>
      </div>
    </add-product>
  </div>
</template>

<script>
import addProduct from './ChangeProducts.vue'
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    onSubmit(){
      this.$notify({
         title: '成功',
         message: '新增产品成功',
         type: 'success'
       });
    },
      onSuspend(){
        this.$notify({
          title: '警告',
          message: '取消添加商品',
          type: 'warning'
      });
      this.$router.push('/order');
    },
  },
  components: {
    addProduct
  }
}
</script>

<style lang="css">
</style>
