<template lang="html">
  <div class="">
    <heabarbar class="heabarbar"></heabarbar>
  <div class="weui-flex">
    <div class=""> <sidebar></sidebar> </div>
    <div class="weui-flex__item"><commodieslist></commodieslist></div>
  </div>
  <tabbar>
    <a href="javascript:;" class="weui-tabbar__item">
        <span style="display: inline-block;position: relative;">
            <img src="/static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
        </span>
        <p class="weui-tabbar__label">个人中心</p>
    </a>
  </tabbar>
  </div>
</template>

<script>
import sidebar from "./homepage/sidebar.vue"
import commodieslist from "./homepage/commodieslist.vue"
import heabarbar from "./common/header.vue"
import tabbar from "./common/tabbar.vue"
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
    sidebar,
    commodieslist,
    heabarbar,
    tabbar
  }
}
</script>

<style lang="css">
.weui-flex__item{

}
.weui-flex{
  margin-top: 100px;
}
.heabarbar{

}
</style>
