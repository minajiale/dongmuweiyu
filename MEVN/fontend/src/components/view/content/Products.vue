<template>
  <div class="products"   style="width: 1100px">
    <h1>产品管理 &nbsp<router-link to="/product/addProduct">+</router-link> </h1>
    <el-row>
    <el-col class="" :span="2"><sideMenu v-on:itemClick ="getProductsBySecClass" v-on:muenuClick='getProductsByFirClass'></sideMenu></el-col>
      <el-col :span="22">
        <el-table
          :data="tableData5"
          style="width: 1000px">
          <el-table-column type="expand">
            <template scope="props">
              <el-row >
               <el-col :span="12"><div class="">
                <img v-bind:src="props.row.img[1]" class="image">
              </div></el-col>
               <el-col :span="12"><el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品ID">
                  <span>{{ props.row._id }}</span>
                </el-form-item>
                <el-form-item label="剩余库存">
                  <span>{{ props.row.num }}</span>
                </el-form-item>
                <el-form-item label="最小库存">
                  <span>{{ props.row.minNUm }}</span>
                </el-form-item>
                <el-form-item label="卖价">
                  <span>{{ props.row.sellPrice }}</span>
                </el-form-item>
                <el-form-item label="分类">
                  <span>{{ props.row.firstClass }}/{{props.row.secondClass}}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form></el-col>
            </el-row>
            </template>
          </el-table-column>
          <el-table-column
            label="商品名称"
            prop="name">
          </el-table-column>
          <el-table-column
            label="商品货号"
            prop="code">
          </el-table-column>
          <el-table-column
            label="规格"
            prop="spec">
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              <el-button
              size="small"
              type="primary"
              @click="handleAdd(scope.$index, scope.row)">加入订单</el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-col>

    <el-dialog title="修改产品" :visible.sync="dialogFormVisible">
      <keep-alive exclude="productDetails">
        <component
        v-bind:is="currentView"
        :isChange="true"
        v-on:changeDialogFormVisible="watchDialogFormVisible"
        :prodictInit="prodictTemp">
        </component>
      </keep-alive>
      <!-- <product-details
        :isChange="true"
        v-on:changeDialogFormVisible="watchDialogFormVisible"
        :form="prodictTemp"
        >
      </product-details> -->
    </el-dialog>

    <el-dialog title="加入购物车" :visible.sync="addCartVisible">
      <el-form :model="product">
        <el-form-item label="请输入商品单价">
          <el-input v-model="product.price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入商品数量，不输入为1">
          <el-input v-model="product.number" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addCartVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCartVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  import productDetails from './detailes/ChangeProducts.vue'
  import sideMenu from '../products/sideMenu.vue'

  export default {
    data() {
      return {
        currentView:'',//keep-alive参数
        product:{
          price:1,
          number:1,
        },
        dialogFormVisible: false,//控制详情弹出框
        addCartVisible:false,
        activeName: '1',　//控制折叠框
        activeName2: 'second',//控制标签页，选择卡项
        tempdata1:[], // 处理商品的中间变量,查询商品的collection
        classifacation:[],//，查询分类的collection
        tableData5: [], //商品信息
        prodictTemp:[],//row
        param:{
          secondClass:'',
          firstClass:""
        },
      }
    },
    components:{
      productDetails,
      sideMenu,
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleEdit(index, row) {
        this.dialogFormVisible=true;
        this.prodictTemp=row;
        this.currentView=productDetails;
      },
      watchDialogFormVisible(value){
        this.dialogFormVisible=false;
        this.currentView=sideMenu;
      },
      handleDelete(index, row) {
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
      handleAdd(index,row){
        this.addCartVisible=true;
        console.log(row._id);
        this.insertgeneralGoods(row._id)
      },
      insertgeneralGoods(id){
        this.$http({
          method:'psot',
          url:'/customer/insertCart',
          params:{
            commodityId:id,
            salePrice:this.product.price,
            number:this.product.number
          },
        }).then(res=>{
          this.$notify({
             title: '成功',
             message: '加入购物车成功',
             type: 'success'
           });
        },error=>{
          this.$notify.error({
            title: '错误',
            message: '加入购物车失败'
          });
        })
      },
      deleteProduct(row,item){
        //item为id
        axios({
          method: 'delete',
          url:'/products/delete',
          data:{
            id:item,
          }
        }).then(res=>{
          this.$notify({
             title: '成功',
             message: '删除产品成功',
             type: 'success'
           });
          var index = this.tableData5.indexOf(row);
           this.tableData5.splice(index,1);
        },error=>{
          this.$notify.error({
            title: '错误',
            message: '删除产品失败'
          });
        })
      },
      getAllProducts(){
        axios({
          url:'/products',
        }).then(res=>{
          this.tableData5 = res.data.result.allProducts;
        },error=>{
          console.log("error");
        })
      },
      getProductsBySecClass(key,fatherKey){
        console.log(key);
        this.param.firstClass=fatherKey;
        this.param.secondClass=key;
        axios({
          url:'/products/SClass',
          params:this.param,
        }).then(res=>{
          if( res.data.result){
            this.tableData5 = res.data.result.allProducts;
          }else{
            this.tableData5=[];
            console.log("您查询的商品不存在")
          }
        },error=>{
          console.log("error");
        })
      },
      getProductsByFirClass(key){
        console.log(key);
        if(key==1){
          this.getAllProducts();
        }else{
        axios({
          url:'/products/FClass',
          params:{
            firstClass:key
          },
        }).then(res=>{
          if( res.data.result){
            this.tableData5 = res.data.result.allProducts;
          }else{
            this.tableData5=[];
            console.log("您查询的商品不存在")
          }
        },error=>{
          console.log("error");
        })
      }
      },
    },
  mounted: function(){
    this.getAllProducts();
  },
}
</script>

<style>
  .products el-table{
    margin-right: -300px;
  }
  .el-tabs__content{
    display: none;
  }
  h1{
    margin-left: 40px;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 90%;
  }
  .products .el-form-item{
    width: 600px;
  }
</style>
