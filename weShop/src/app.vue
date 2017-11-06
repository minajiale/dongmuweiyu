<template lang="html">
  <div class="weui-flex">
    <header></header>
    <div class="weui-flex__item"> <sidebar></sidebar> </div>
    <div class="weui-flex__item"><commodieslist></commodieslist></div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import sidebar from "./views/homepage/sidebar.vue"
import commodieslist from "./views/homepage/commodieslist.vue"
import header from "./views/common/header.vue"
import tabbar from "./views/common/tabbar.vue"
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
    header,
    tabbar
  }
}
</script>

<style lang="css">
</style>
