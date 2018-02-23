<template lang="html">
  <div class="">
    <div class="customerMessage">
      <div class="personal-info">
        <h2> {{customer.name}} </h2><span>{{customer.address}} &nbsp &nbsp</span><span>{{customer.phone}}</span>
      </div>
    </div>
    <div class="" v-for="order in orders">
      <div class="" v-if="order.DoorGoodsOrder.length != 0 || order.general.length != 0">
        {{order.time}}
      </div>
      <Verify-general  v-if="order.general.length != 0" v-bind:table-data="order.general" v-bind:visibility="false" @generalAomunt="getGeneralAomunt"></Verify-general>
      <div class="style"></div>
      <Verify-door v-if="order.DoorGoodsOrder.length != 0" v-bind:table-data3="order.DoorGoodsOrder"v-bind:visibility="false" @doorAomunt="getDoorAmount"></Verify-door>
    </div>
    <el-table
      :data="returnBack"
      stripe
      border
      style="width: 100%">
      <el-table-column label="退货" v-if="visibility==false">
        <el-table-column
          prop="time"
          label="时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="code"
          label="货号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="spec"
          label="规格"
          width="150">
        </el-table-column>
        <el-table-column
          prop="unit"
          label="单位"
          width="100">
        </el-table-column>
        <el-table-column
          prop="num"
          label="数量"
          width="80">
        </el-table-column>
    </el-table-column>
    </el-table>
    <el-table
      :data="addBack"
      stripe
      border
      style="width: 100%">
      <el-table-column label="补货" v-if="visibility==false">
      <el-table-column
        prop="time"
        label="时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="code"
        label="货号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="spec"
        label="规格"
        width="150">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位"
        width="100">
      </el-table-column>
      <el-table-column
        prop="num"
        label="数量"
        width="80">
      </el-table-column>
    </el-table-column>
    </el-table>
    <div class="">
      合计:{{this.allAmount}}
    </div>
    <div class="">
      已经支付:{{this.paied}}
    </div>
    <div class="">
      欠款:{{this.rest}}
    </div>
  </div>
</template>

<script>
import VerifyDoor from './detailes/VerifyDoor.vue'
import VerifyGeneral from './detailes/VerifyGeneral.vue'
export default {
  data () {
    return {
      allAmount:0,
      rest:0,
      paied:0,
      returnBack:[],
      addBack:[],
      orders:[],
      customer:{
        name:'',
        address:'',
        phone:''
      }
    }
  },
  computed: {},
  ready () {},
  attached () {},
  mounted: function(){
    this.getOrderByCusId();
    this.getThisCustomer();
  },
  methods: {
    getThisCustomer(){
      this.$http({
        url:"/customer/oneCustomer"
      }).then(res=>{
        this.customer=res.data.result.cus;
      },error=>{
        this.$notify.error({
          title: '错误',
          message: '获取订单列表失败'
        });
      })
    },
    getOrderByCusId(){
      this.$http({
        url:"/customer/findOrderByCusId"
      }).then(res=>{
        this.orders=res.data.result.Orders;
        console.log(this.orders[0].general);
        this.allAmount= res.data.result.allAmount;
        this.paied= res.data.result.paied;
        this.rest= this.allAmount-this.paied;
        this.returnBack=res.data.result.returnBack;
        this.addBack=res.data.result.addBack;
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
.personal-info{
  text-align: center;
  margin-bottom: 50px;
}
</style>
