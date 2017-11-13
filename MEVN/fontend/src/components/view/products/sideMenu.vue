<template lang="html">
  <div class="">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-for="classi in classifacation"
      :key="_id"
      >
      <el-submenu index="1">
        <template slot="title">
          <span>{{classi.label}}</span>
        </template>
        <el-menu-item-group      v-for="subclassi in classi.children":key="_id" >
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="1-1">{{subclassi.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</el-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      classifacation:[{
        "_id": "59b525ef5096a428fa0e3699",
        "label": "全部",
      },{
				"_id": "59b525ef5096a428fa0e3699",
				"label": "花洒系列",
				"children": [
					{
						"label": "东沐花洒",
						"_id": "59b525fd5096a428fa0e369a"
					},
					{
						"label": "dsd",
						"_id": "5a07a27e4fdf871e0e192c46"
					}
				]
			},
      {
        "_id": "59b525ef5096a428fa0e3699",
        "label": "花洒系列",
        "children": []
      }
    ]
    }
  },
  computed: {},
  ready () {},
  attached () {
    this.getClass();
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
      },error=>{
        console.log("error");
      })
    },
  },
  components: {}
}
</script>

<style lang="css">
</style>
