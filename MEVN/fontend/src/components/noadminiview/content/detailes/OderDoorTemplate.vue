<template lang="html">
      <div class="" id="oderDoorTemplate">
      <el-form ref="form" :model="form" label-width="200px" id="oderDoorForm">

        <el-row :gutter="10">
          <el-col :span="8"><el-form-item label="型号">
            <el-input v-model="form.spec"></el-input>
          </el-form-item></el-col>
          <el-col :span="8"><el-form-item label="产品名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item></el-col>
          <el-col :span="8"><el-form-item label="油漆颜色">
            <el-input v-model="form.color"></el-input>
          </el-form-item></el-col>
        </el-row>

        <el-row :gutter="15">
          <el-col :span="8"> <el-form-item label="门洞尺寸（高*宽*墙厚）">
            <el-input v-model="form.wall"></el-input>
          </el-form-item></el-col>
          <el-col :span="8"> <el-form-item label="材质">
            <el-input v-model="form.material"></el-input>
          </el-form-item></el-col>
          <el-col :span="8"> <el-form-item label="单位">
            <el-input v-model="form.unit"></el-input>
          </el-form-item></el-col>
        </el-row>
        <el-row :gutter="15">
          <el-col :span="8"> <el-form-item label="门套线">
            <el-input v-model="form.doorLine"></el-input>
          </el-form-item></el-col>
          <el-col :span="8"><el-form-item label="数量">
            <el-input v-model="form.number"></el-input>
          </el-form-item></el-col>
          <el-col :span="8"><el-form-item label="单价（元）">
            <el-input v-model="form.price"></el-input>
          </el-form-item></el-col>
        </el-row>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        spec:"",//型号
        name:'',//产品名称
        color:"",//油漆颜色
        wall: '',//门洞尺寸－高×宽×墙厚
        material: '',//材质
        unit: '',//单位
        doorLine:"",//门套线类型
        number:"",//数量
        price:"",//金额（元）
        remark:"",//备注
      }
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    onSubmit(){
      this.$http({
        method:"post",
        url:"/customer/insertDoorGoodscart",
        data:this.form
      }).then(res=>{
        if(res.data.result.nModified == 1){
          this.$notify({
             title: '成功',
             message: '加入购物车成功',
             type: 'success'
           });
        }else{
          this.$notify.error({
            title: '错误',
            message: '加入购物车失败'
          });
        }
      },error=>{
        this.$notify.error({
          title: '错误',
          message: '加入购物车失败'
        });
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
