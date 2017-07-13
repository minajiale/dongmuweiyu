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
  },

  methods:{
       fetchData(){
            console.log('路由发送变化doing...');
      }
   },
   created() {
         var self = this;
         self.fetchData();
   },
   watch:{
       '$route':'fetchData'
   },

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
