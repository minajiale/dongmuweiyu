<template>
  <div class="Index">
    <topMenu></topMenu>
    <rightMenu></rightMenu>
    <div class="content">
    <transition name="move" mode="out-in"><router-view name="rightContent"></router-view></transition>
</div>
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

<style scoped>
.content{
  float: left;
  position:relative;
  top: px;
  margin-left: 210px;
}
</style>
