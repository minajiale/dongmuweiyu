<template lang="html">
<div class="">
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="code"
      label="货号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="spec"
      label="规格"
      width="150">
    </el-table-column>
    <el-table-column
      prop="unit"
      label="单位"
      width="100">
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价"
      width="150">
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="100">
    </el-table-column>
    <el-table-column
      sortable
      prop="price"
      width="150"
      label="金额(元)">
    </el-table-column>
    <el-table-column
      label="操作"
      width="120">
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

   <el-dialog title="修改订单" :visible.sync="editGeneral">
     <el-form :model="product">
       <el-form-item label="请输入商品单价">
         <el-input v-model="product.price" auto-complete="off"></el-input>
       </el-form-item>
       <el-form-item label="请输入商品数量">
         <el-input-number v-model="product.num" @change="handleChange" :min="0" ></el-input-number>
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
      operatTemp:{},
      tempKey:-1,
      all:0,
      editGeneral:false,
    product:
      {
        price:"1900",//规定卖价
        num:1,
      },
    }
  },
  watch: {
  // 如果 `tableData` 发生改变，这个函数就会运行
    tableData: function (newQuestion) {
      this.getAllAmount()
    }
  },
  computed: { },
  ready () {},
  attached () {},
  mounted:function(){
  },
  methods: {
    getAllAmount: _.debounce(
      function(){
        var amount=0;
        this.tableData.forEach(function(item,index,array){
          amount= amount+ item.price*item.num
        })
        this.all=amount;
        this.$emit("generalAomunt",amount);
      },
      // 这是我们为判定http请求完毕等待的毫秒数
      100
    ),
    handleChange(value) {
      console.log(value);
    },
    editRow(index,row){
      this.editGeneral=true;
      this.operatTemp=row;
      this.tempKey=index;
      console.log(this.operatTemp.id);
    },
    deleteRow(index,row){
      console.log(index, row);
      this.$confirm('此操作将永久删除该该产品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteProduct(index,row,row.id);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    deleteProduct(index,row,item){
      console.log("item"+item);
      this.$http({
        method: 'delete',
        url:'/customer/cart/deleteGeneral',
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
           this.tableData.splice(index,1);
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
    handleCart(){
      this.editGeneral=false;
      this.$http({
        method: 'post',
        url:'/customer/cart/edit',
        data:{
         id:this.operatTemp.id,
         newdata:this.product
        }
      }).then(res=>{
        if(res.data.status ==0 && res.data.msg.nModified != 0){
          var key=this.tempKey;
          var temp = {};
          temp.id=this.tableData[key].id;
          temp.proId=this.tableData[key].proId;
          temp.price=this.product.price;
          temp.num=this.product.num;
          // result[m].unit=data[m].unit;
          temp.name=this.tableData[key].name;
          temp.spec=this.tableData[key].spec;
          temp.code=this.tableData[key].code;
          this.tableData.splice(key,1,temp);
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
    }
  },
  components: {},
  props: {
    tableData:Array
  },
}
</script>

<style lang="css">
</style>
