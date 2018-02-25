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
import rightMenu from './noadminview/dashboad/Menu.vue'
import topMenu from './noadminview/dashboad/Top.vue'

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
  computed:{
  },
  methods:{
    checkout(){
      var manager=this.getCookie('managerId');
      if(manager){
      }else{
        this.$alert('您尚未登录，所有功能不可用', '登录', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        this.$router.push('/');
      }
    },
  },
  mounted (){
    this.checkout();
  },
}
</script>

<style scoped>
.content{
  float: left;
  position:relative;
  top: px;
  margin-left: 198px;
}
</style>
