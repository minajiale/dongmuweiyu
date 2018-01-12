<template lang="html">
<div class="">
  <el-table
   :data="tableData3"
   border
   style="width: 100%">
   <el-table-column
     prop="spec"
     label="型号"
     width="100">
   </el-table-column>
   <el-table-column
     prop="color"
     label="颜色"
     width="90">
   </el-table-column>
   <el-table-column label="门洞尺寸">
     <el-table-column
       prop="wallHeight"
       label="高"
       width="100">
     </el-table-column>
     <el-table-column
       prop="wallWidth"
       label="宽"
       width="100">
     </el-table-column>
     <el-table-column
       prop="wall"
       label="厚"
       width="100">
     </el-table-column>
   </el-table-column>
   <el-table-column label="门扇尺寸">
     <el-table-column
       prop="doorwayHeight"
       label="高"
       width="100">
     </el-table-column>
     <el-table-column
       prop="doorwayWidth"
       label="宽"
       width="100">
     </el-table-column>
   </el-table-column>
   <el-table-column
     prop="doorLine"
     label="门套线条类型"
     width="100">
   </el-table-column>
   <el-table-column
     prop="number"
     label="数量"
     width="80">
   </el-table-column>
   <el-table-column
     sortable
     prop="price"
     label="金额(元)"
     width="100">
   </el-table-column>
   <el-table-column
     prop="remark"
     label="备注"
     width="150">
   </el-table-column>
   <el-table-column
     label="操作"
     width="100">
     <template scope="scope">
       <el-button
         @click.native.prevent="editRow(scope.$index, tableData)"
         type="text"
         size="small">
         修改
       </el-button>
     </template>
   </el-table-column>
 </el-table>

 <el-dialog title="加入购物车" :visible.sync="editDoor">
   <el-form :model="product">
     <el-form-item label="请输入商品单价">
       <el-input v-model="product.price" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item label="请输入商品单价">
       <el-input v-model="product.price" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item label="请输入商品单价">
       <el-input v-model="product.price" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item label="请输入商品数量，不输入为1">
       <el-input v-model="product.number" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item label="请输入商品数量，不输入为1">
       <el-input v-model="product.number" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item label="请输入商品数量，不输入为1">
       <el-input v-model="product.number" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item label="请输入商品数量，不输入为1">
       <el-input v-model="product.number" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item label="请输入商品数量，不输入为1">
       <el-input v-model="product.number" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item label="请输入商品数量，不输入为1">
       <el-input v-model="product.number" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item label="请输入商品数量，不输入为1">
       <el-input v-model="product.number" auto-complete="off"></el-input>
     </el-form-item>
   </el-form>
   <div slot="footer" class="dialog-footer">
     <el-button @click="addCartVisible = false">取 消</el-button>
     <el-button type="primary" @click="handleCart">确 定</el-button>
   </div>
 </el-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      editDoor:false,
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
      }],
      product: {
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
  mounted:function(){
    this.getDoorGoodscart();
  },
  methods: {
    editRow(){
      this.editDoor=true;
    },
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
