<template lang="html">
  <div class="">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-for="classi in classifacation"
      :key="classi._id"
      >
      <el-submenu index=classi._id>
        <template slot="title">
          <span>{{classi.label}}</span>
        </template>
        <el-menu-item-group     v-for="subclassi in classi.children":key="subclassi._id" >
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item  index="subclassi._id">{{subclassi.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</el-row>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      classifacation:[]
    }
  },
  computed:{
  },
  ready () {
  },
  attached () {

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getClass(){
      axios({
        url:'/class',
        params:{
          userId:"12"
        },
        headers:{
          token:"gtfrdes"
        }
      }).then(res=>{
        this.classifacation = res.data.result.allClass;
        this.classifacation.unshift(
          {"_id": "09b525ef5096a428fa0e3699",
           "label": "全部",})
      },error=>{
        console.log("error");
      })
    },
  },
  mounted: function(){
    this.getClass();
  },
  components: {}
}
</script>

<style lang="css">
</style>
