<template lang="html">
  <div class="weui-flex">
    <header></header>
    <div class="weui-flex__item"> <sidebar></sidebar> </div>
    <div class="weui-flex__item"><commodieslist></commodieslist></div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import sidebar from "./homepage/sidebar"
import commodieslist from "./commodieslist/sidebar"
import header from "./common/header"
import tabbar from "./common/tabbar"
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
