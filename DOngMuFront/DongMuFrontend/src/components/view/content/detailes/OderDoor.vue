<template>
  <div class="order" id="oderDoor">
    <el-row type="flex" class="row-bg" justify="end">
      <el-button type="text" :disabled="false">+新增定门单</el-button>
    </el-row>
    <Preview-door></Preview-door>
    <oder-door-template></oder-door-template>
</div>
</template>
<script>
import oderDoorTemplate from './OderDoorTemplate.vue'
import PreviewDoor from './PreviewDoor.vue'

  export default {
    components:{
      PreviewDoor,
      oderDoorTemplate
    },
    data() {
      return {
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      oderAdd(){
        // var oderDoor = document.getElementById("oderDoor");
        // var oderDoorTemplate= document.getElementById("oderDoorTemplate");
        // var oderDoorForm = document.getElementById("oderDoorForm");
         alert("gvfcdxsz");
         var sss = $("#oderDoor");
        var oDiv = document.createElement('script');
        oDiv.html(oderDoorTemplate);
        $("#oderDoor").appendChild(oDiv);
      }
    }
  }
</script>
<style lang="css">
.row-bg{
  margin-right: 100px;
}
order{
  width: 10px;
}
</style>
