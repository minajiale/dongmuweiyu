<template lang="html">
  <div class="frame">
    <div class="" style="">
      <img src="/static/images/timg.jpeg" alt="" />
    </div>
    <abstract></abstract>
     <div class="weui-flex">
       <div class="weui-flex__item"><div class="placeholder on">产品详情</div></div>
       <div class="weui-flex__item"><div class="placeholder">用户评论</div></div>
     </div>
     <tabbar>
       <a href="javascript:;" class="weui-tabbar__item">
         <a href="javascript:;" class="weui-btn weui-btn_primary">立即购买</a>
       </a>
       <a href="javascript:;" class="weui-tabbar__item">
         <a href="javascript:;" class="weui-btn weui-btn_primary">加入购物车</a>
       </a>
     </tabbar>
  </div>
</template>

<script>
import abstract from "./abstract.vue"
import tabbar from "@/views/common/tabbar.vue"

export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
    abstract,
    tabbar
  }
}
</script>

<style lang="css">
.on{
  background-color: #EFEFF4;
  padding: 12px;
}
.weui-btn{
  margin: 0 10px;
}
.frame .weui-flex{
  margin-top: 0px;
}
</style>
