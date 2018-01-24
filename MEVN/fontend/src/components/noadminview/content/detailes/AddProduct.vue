<template lang="html">
  <div class="addProduct">
    <add-product :isChange="false" :form="form">
      <h2 slot="header">新增商品</h2>
    </add-product>
  </div>
</template>

<script>
import addProduct from './ChangeProducts.vue'
export default {
  data () {
    return {
      form:{
        id:"",
        name:"",
        code:"", //商品货号
        spec:"", //规格
        sellPrice:"",//规定卖价
        buyPrice:"", //成交价格
        minNUm:"10", //最小库存
        num:"", //剩余数量
        firstClass:"", //第一级别分类
        secondClass:"", //第二季别分类
        img:[], //图片
        desc:"",//商品简单描述
      },
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
  },
  components: {
    addProduct
  }
}
</script>

<style lang="css">
</style>
