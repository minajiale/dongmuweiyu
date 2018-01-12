<template lang="html">
<div class="">
  <el-table
   :data="tableData3"
   border
   style="width: 100%">
   <el-table-column
     prop="spec"
     label="型号"
     width="150">
   </el-table-column>
   <el-table-column
     prop="color"
     label="颜色"
     width="150">
   </el-table-column>
   <el-table-column label="门洞尺寸">
     <el-table-column
       prop="wallHeight"
       label="高"
       width="120">
     </el-table-column>
     <el-table-column
       prop="wallWidth"
       label="宽"
       width="120">
     </el-table-column>
     <el-table-column
       prop="wall"
       label="厚"
       width="120">
     </el-table-column>
   </el-table-column>
   <el-table-column label="门扇尺寸">
     <el-table-column
       prop="doorwayHeight"
       label="高"
       width="120">
     </el-table-column>
     <el-table-column
       prop="doorwayWidth"
       label="宽"
       width="120">
     </el-table-column>
   </el-table-column>
   <el-table-column
     prop="doorLine"
     label="门套线条类型"
     width="150">
   </el-table-column>
   <el-table-column
     prop="number"
     label="数量"
     width="150">
   </el-table-column>
   <el-table-column
     sortable
     prop="price"
     label="金额(元)"
     width="120">
   </el-table-column>
   <el-table-column
     prop="remark"
     label="备注"
     width="150">
   </el-table-column>
 </el-table>
</div>
</template>

<script>
export default {
  data () {
    return {
      tableData3: [{
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
      }]
    }
  },
  computed: {},
  ready () {},
  attached () {},
  mounted:function(){
    this.getDoorGoodscart();
  },
  methods: {
    getDoorGoodscart(){
      this.$http({
        method:"get",
        url:"/customer/DoorGoodscart"
      }).then(res=>{
        this.tableData3=res.data.result.DoorGoods
      },error=>{
        this.$notify.error({
          title: '错误',
          message: '货物定门单失败，请联系管理员'
        });
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
