<template lang="html">
  <div class="addProduct">
    <add-product :isChange="false" v-on:ChangeProduct="getComponentData">
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
    return {
      product: {
        "id":"",
        "name":"",
        "spec":"",
        "sellPrice":"",
        "minNUm":"",
        "num":"",
        "buyPrice":"",
        "classification":"",
        "img":""
      },
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    getComponentData(data){
      this.product=data
    },
    onSubmit(){
      console.log(this.product);
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
