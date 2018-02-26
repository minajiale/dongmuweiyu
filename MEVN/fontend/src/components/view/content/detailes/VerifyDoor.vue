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
     prop="name"
     label="产品名称"
     width="100">
   </el-table-column>
   <el-table-column
     prop="color"
     label="油漆颜色"
     width="110">
   </el-table-column>
   <el-table-column
      label="门洞尺寸(长*宽*厚)"
      width="160"
      prop="wall">
   </el-table-column>
   <el-table-column
     prop="doorLine"
     label="门套线"
     width="100">
   </el-table-column>
   <el-table-column
     prop="material"
     label="材质"
     width="100">
   </el-table-column>
   <el-table-column
     prop="unit"
     label="单位"
     width="80">
   </el-table-column>
   <el-table-column
     prop="number"
     label="数量"
     width="80">
   </el-table-column>
   <el-table-column
     sortable
     prop="price"
     label="单价(元)"
     width="100">
   </el-table-column>
   <el-table-column
     prop="remark"
     label="备注"
     width="150">
   </el-table-column>
   <el-table-column
     label="操作"
     width="180"
     v-if="visibility"
     >
     <template slot-scope="scope">
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
   <el-form ref="product" :model="product" label-width="90px" id="oderDoorForm">
     <el-row :gutter="3">
       <el-col :span="8"><el-form-item label="型号">
         <el-input v-model="product.spec"></el-input>
       </el-form-item></el-col>
       <el-col :span="8"><el-form-item label="产品名称">
         <el-input v-model="product.name"></el-input>
       </el-form-item></el-col>
       <el-col :span="8"><el-form-item label="油漆颜色">
         <el-input v-model="product.color"></el-input>
       </el-form-item></el-col>
     </el-row>

     <el-row :gutter="15">
       <el-col :span="8"> <el-form-item label="门洞尺寸（高*宽*墙厚）"width="300">
         <el-input v-model="product.wall"></el-input>
       </el-form-item></el-col>
       <el-col :span="8"> <el-form-item label="材质">
         <el-input v-model="product.material"></el-input>
       </el-form-item></el-col>
       <el-col :span="8"> <el-form-item label="单位">
         <el-input v-model="product.unit"></el-input>
       </el-form-item></el-col>
     </el-row>
     <el-row :gutter="15">
       <el-col :span="8"> <el-form-item label="门套线">
         <el-input v-model="product.doorLine"></el-input>
       </el-form-item></el-col>
       <el-col :span="8"><el-form-item label="数量">
         <el-input v-model="product.number"></el-input>
       </el-form-item></el-col>
       <el-col :span="8"><el-form-item label="单价（元）">
         <el-input v-model="product.price"></el-input>
       </el-form-item></el-col>
     </el-row>
     <el-form-item label="备注">
       <el-input type="textarea" v-model="product.remark"></el-input>
     </el-form-item>
   </el-form>
   <div slot="footer" class="dialog-footer">
     <el-button @click="editDoor = false">取 消</el-button>
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
    this.getAllAmount()
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
      this.product=row;
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
          var temp = this.product;
          temp.spec=this.tableData3[key].spec;
          temp._id=this.tableData3[key]._id;
          console.log(temp);
          this.tableData3.splice(key,1,this.product);
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
        this.deleteProduct(index,row,row._id);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    deleteProduct(index,row,item){
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
           this.tableData3.splice(index,1);
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
    tableData3:Array,
    visibility:Boolean

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
