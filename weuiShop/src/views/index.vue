<template lang="html">
  <div class="">
    <heabarbar class="heabarbar"></heabarbar>
  <div class="weui-flex">
    <div class=""> <sidebar></sidebar> </div>
    <div class="weui-flex__item"><commodieslist></commodieslist></div>
  </div>
  <tabbar></tabbar>
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
