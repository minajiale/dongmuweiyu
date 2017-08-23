<template>
  <div class="" id="oderDoor">
    <div class="" id="oderDoorTemplate">
    <el-form ref="form" :model="form" label-width="200px" id="oderDoorForm">
      <el-form-item label="型号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="颜色">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="门洞尺寸－高">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="门洞尺寸－宽">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="门洞尺寸－墙厚">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="门扇尺寸－高">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="门扇尺寸－宽">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="门套线类型">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="金额（元）">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" @click="oderAdd" class="addOrderTempalte">增加</el-button>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
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
