<template lang="html">
<div class="">
  <Verify-order></Verify-order>
</div>
</template>

<script>
import VerifyOrder from './detailes/VerifyOrder.vue'
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  mounted: function(){
    this.getOrderByCusId();
  },
  methods: {
    getOrderByCusId(){
      this.$http({
        url:"/customer/findOrderByCusId"
      }).then(res=>{
        console.log(res.data.result.Orders);
      },error=>{
        this.$notify.error({
          title: '错误',
          message: '获取订单列表失败'
        });
      })
    }
  },
  components: {
    VerifyOrder
  }
}
</script>

<style lang="css">
</style>
