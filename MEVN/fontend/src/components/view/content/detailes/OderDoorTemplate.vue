<template lang="html">
      <div class="" id="oderDoorTemplate">
      <el-form ref="form" :model="form" label-width="200px" id="oderDoorForm">

        <el-row :gutter="15">
          <el-col :span="12"><el-form-item label="型号">
            <el-input v-model="form.spec"></el-input>
          </el-form-item></el-col>
          <el-col :span="12"><el-form-item label="颜色">
            <el-input v-model="form.color"></el-input>
          </el-form-item></el-col>
        </el-row>

        <el-row :gutter="15">
          <el-col :span="8"> <el-form-item label="门洞尺寸－高">
            <el-input v-model="form.wallHeight"></el-input>
          </el-form-item></el-col>
          <el-col :span="8"> <el-form-item label="门洞尺寸－宽">
            <el-input v-model="form.wallWidth"></el-input>
          </el-form-item></el-col>
          <el-col :span="8"> <el-form-item label="门洞尺寸－墙厚">
            <el-input v-model="form.wall"></el-input>
          </el-form-item></el-col>
        </el-row>

        <el-row :gutter="15">
          <el-col :span="8"> <el-form-item label="门扇尺寸－高">
            <el-input v-model="form.doorwayHeight"></el-input>
          </el-form-item></el-col>
          <el-col :span="8"> <el-form-item label="门扇尺寸－宽">
            <el-input v-model="form.doorwayWidth"></el-input>
          </el-form-item></el-col>
        </el-row>
        <el-form-item label="门套线类型">
          <el-input v-model="form.doorLine"></el-input>
        </el-form-item>

        <el-row :gutter="15">
          <el-col :span="12"><el-form-item label="数量">
            <el-input v-model="form.number"></el-input>
          </el-form-item></el-col>
          <el-col :span="12"><el-form-item label="金额（元）">
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
        spec:"型号",//型号
        color:"红色",//颜色
        doorwayHeight:"23",//门扇尺寸－高
        doorwayWidth:"45",//门扇尺寸－宽
        wallHeight: "4",//门洞尺寸－高
        wallWidth: "3",//门洞尺寸－宽
        wall:"1",     //门洞尺寸－墙厚
        doorLine:"外白",//门套线类型
        number:"1",//数量
        price:"1983",//金额（元）
        remark:"lalalalala阿拉拉拉",//备注
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
