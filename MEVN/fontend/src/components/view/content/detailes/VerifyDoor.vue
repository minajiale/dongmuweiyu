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
     width="180">
     <template scope="scope">
       <el-button
         @click.native.prevent="editRow(scope.$index, scope.row)"
         type="text"
         size="small">
         修改
       </el-button>
       <el-button
         @click.native.prevent="deleteRow(scope.$index, scope.row)"
         type="text"
         size="small">
         删除
       </el-button>
     </template>
   </el-table-column>
 </el-table>

 <el-dialog title="修改定门单" :visible.sync="editDoor">
   <el-form :model="product">
     <el-row :gutter="20">
       <el-col :span="8">
         <el-form-item label="颜色">
           <el-input v-model="product.color" auto-complete="off"></el-input>
         </el-form-item>
       </el-col>
       <el-col :span="8">
         <el-form-item label="门扇尺寸－高">
           <el-input v-model="product.doorwayHeight" auto-complete="off"></el-input>
         </el-form-item>
       </el-col>
       <el-col :span="8">
         <el-form-item label="门扇尺寸－宽">
           <el-input v-model="product.doorwayWidth" auto-complete="off"></el-input>
         </el-form-item>
       </el-col>
     </el-row>
     <el-row :gutter="20">
       <el-col :span="8">
         <el-form-item label="门洞尺寸－高">
           <el-input v-model="product.wallHeight" auto-complete="off"></el-input>
         </el-form-item>
       </el-col>
       <el-col :span="8">
         <el-form-item label="门洞尺寸－宽">
           <el-input v-model="product.wallWidth" auto-complete="off"></el-input>
         </el-form-item>
       </el-col>
       <el-col :span="8">
         <el-form-item label="门洞尺寸－墙厚">
           <el-input v-model="product.wall" auto-complete="off"></el-input>
         </el-form-item>
       </el-col>
     </el-row>
     <el-row :gutter="20">
       <el-col :span="8">
         <el-form-item label="门套线类型">
           <el-input v-model="product.doorLine" auto-complete="off"></el-input>
         </el-form-item>
       </el-col>
       <el-col :span="8">
         <el-form-item label="数量">
           <el-input-number v-model="product.number" @change="handleChange" :min="0" ></el-input-number>
         </el-form-item>
       </el-col>
       <el-col :span="8">
         <el-form-item label="单价">
           <el-input v-model="product.price" auto-complete="off"></el-input>
         </el-form-item>
       </el-col>
     </el-row>
     <el-form-item label="备注">
       <el-input v-model="product.remark" auto-complete="off"></el-input>
     </el-form-item>
   </el-form>
   <div slot="footer" class="dialog-footer">
     <el-button @click="addCartVisible = false">取 消</el-button>
     <el-button type="primary" @click="handleCart">确 定</el-button>
   </div>
 </el-dialog>
 <div class="">
   合计(元)：{{this.all}}
 </div>
</div>
</template>

<script>
import _ from 'lodash';

export default {
  data () {
    return {
      all:0,
      editDoor:false,
      tableData3:[],
      tempDoor:[],
      tempKey:-1,
      product: {
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
  watch: {
  // 如果 `tableData` 发生改变，这个函数就会运行
    tableData3: function (newQuestion) {
      this.getAllAmount()
    }
  },
  computed: {},
  ready () {},
  attached () {},
  mounted:function(){
  },
  methods: {
    getAllAmount: _.debounce(
      function(){
        var amount=0;
        this.tableData3.forEach(function(item,index,array){
          amount= amount+ item.price*item.number
        })
        this.all=amount;
        this.$emit("doorAomunt",amount);
        return amount
      },
      // 这是我们为判定http请求完毕等待的毫秒数
      100
    ),
    editRow(index,row){
      this.editDoor=true;
      this.tempDoor=row;
      this.tempKey=index;
      console.log(this.tempDoor);
    },
    handleCart(){
      this.editDoor=false;
      this.$http({
        method: 'post',
        url:'/customer/cart/editDoor',
        data:{
         id:this.tempDoor._id,
         newdata:this.product,
         spec:this.tableData3[this.tempKey].spec
        }
      }).then(res=>{
        if(res.data.status ==0 && res.data.msg.nModified != 0){
          var key=this.tempKey;
          this.tableData3[key]=this.product;
          this.$notify({
            title: '成功',
            message: '修改商品信息成功',
            type: 'success'
          });
        }else{
          this.$message.error('修改商品失败');
        }
      },error=>{
        console.log("error");
        this.$message.error('修改商品失败');
      })
    },
    deleteRow(index,row){
      console.log(index, row);
      this.$confirm('此操作将永久删除该该产品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteProduct(row,row._id);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    deleteProduct(row,item){
      this.$http({
        method: 'delete',
        url:'/customer/cart/delete',
        data:{
          id:item,
        }
      }).then(res=>{
        if(res.data.status == 0 && res.data.msg.nModified !=0){
          this.$notify({
             title: '成功',
             message: '删除产品成功',
             type: 'success'
           });
          // var index = this.tableData5.indexOf(row);
          //  this.tableData5.splice(index,1);
        }else{
          this.$notify.error({
            title: '错误',
            message: '删除产品失败'
          });
        }
      },error=>{
        this.$notify.error({
          title: '错误',
          message: '删除产品失败'
        });
      })
    },
  },
  components: {},
  props: {
    tableData3:Array
  },
}
</script>

<style lang="css">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
