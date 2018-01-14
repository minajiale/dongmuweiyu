<template lang="html">
  <div class="">
    <div class="customerMessage">
      <div class="personal-info">
        <h2> 刘联友 </h2><span>赵湾镇 &nbsp &nbsp</span><span>15929159416</span>
      </div>
      <div class="">
        <span>2017-08-23</span>
      </div>
    </div>
    <div class="" v-for="order in orders">
      普通：{{order.generalGoodsOrder}}
      定门单：{{order.DoorGoodsOrder}}
      <!-- <Verify-general table-data="order.generalGoodsOrder" @generalAomunt="getGeneralAomunt"></Verify-general>
      <div class="style"></div>
      <Verify-door table-data3="order.DoorGoodsOrder" @doorAomunt="getDoorAmount"></Verify-door> -->
    </div>

    <div class="">
      合计:{{this.allAmount}}
    </div>
 <!-- <el-dialog title="创建订单" :visible.sync="createOrder">
   <el-form :model="orderStatus">
     <el-form-item label="定金（元）">
       <el-input v-model="orderStatus.status" auto-complete="off"></el-input>
     </el-form-item>
   </el-form>
   <div slot="footer" class="dialog-footer">
     <el-button @click="addCartVisible = false">取 消</el-button>
     <el-button type="primary" @click="handleCart">确 定</el-button>
   </div>
 </el-dialog> -->
  </div>
</template>

<script>
import VerifyDoor from './detailes/VerifyDoor.vue'
import VerifyGeneral from './detailes/VerifyGeneral.vue'
export default {
  data () {
    return {
      orders:[]
    }
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
        this.orders=res.data.result.Orders;
      },error=>{
        this.$notify.error({
          title: '错误',
          message: '获取订单列表失败'
        });
      })
    }
  },
  components: {
    VerifyDoor,
    VerifyGeneral
  }
}
</script>

<style lang="css">
</style>
