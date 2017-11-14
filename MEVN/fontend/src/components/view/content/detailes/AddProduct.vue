<template lang="html">
  <div class="addProduct">
    <add-product :isChange="false" v-on:ChangeProduct="getComponentData">
      <h2 slot="header">新增商品</h2>
    </add-product>
  </div>
</template>

<script>
import addProduct from './ChangeProducts.vue'
export default {
  data () {
    return {

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
