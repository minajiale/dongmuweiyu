<template>
  <div class="Index">
    <topMenu></topMenu>
    <rightMenu></rightMenu>
    <router-view name="rightContent"></router-view>
  </div>
</template>

<script>
import rightMenu from './view/dashboad/Menu.vue'
import topMenu from './view/dashboad/Top.vue'

export default {
  name: 'Index',
  data () {
    return {

    }
  },
  components:{
    rightMenu,
    topMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
