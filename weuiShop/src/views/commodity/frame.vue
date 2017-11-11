<template lang="html">
  <div class="">
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
         <a href="javascript:;" class="weui-btn weui-btn_primary">页面主操作 Normal</a>
       </a>
       <a href="javascript:;" class="weui-tabbar__item">
         <a href="javascript:;" class="weui-btn weui-btn_primary">页面主操作 Normal</a>
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
</style>
