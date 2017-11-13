<template>
  <div class="products"   style="width: 1100px">
    <h1>产品管理 &nbsp<router-link to="/product/addProduct">+</router-link> </h1>
    <el-row>
    <el-col :span="2"><sideMenu></sideMenu></el-col>
      <el-col :span="22">
        <el-table
          :data="tableData5"
          style="width: 1000px">
          <el-table-column type="expand">
            <template scope="props">
              <el-row >
               <el-col :span="12"><div class="">
                <img v-bind:src="props.row.imgSrc" class="image">
              </div></el-col>
               <el-col :span="12"><el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="剩余库存">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="卖价">
                  <span>{{ props.row.id }}</span>
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
      <product-details :isChange="true"></product-details>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="修改产品" :visible.sync="addCartVisible">
      <el-form :model="form">
        <el-form-item label="请输入商品单价" :label-width="formLabelWidth">
          <el-input v-model="product.price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入商品数量，不输入为1" :label-width="formLabelWidth">
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
        tableData5: [{
          id: '12987122',
          name: '二麻子',
          code:"Mi-2",
          spec:"50*50",
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          imgSrc:'static/logo.png'
        }, {
          id: '12987123',
          name: '东牧花洒',
          code:"Mi-2",
          spec:"50*50",
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '东牧菜盆水龙头',
          code:"Mi-2",
          spec:"50*50",
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: 'PVC板子',
          code:"Mi-2",
          spec:"50*50",
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    },
    components:{
      productDetails,
      sideMenu
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleEdit(index, row) {
        this.dialogFormVisible=true;
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('此操作将永久删除该该产品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleAdd(index,row){
        this.addCartVisible=true;
      },
      getAllProducts(){
        axios({
          url:'/products',
        }).then(res=>{
          this.data2 = res.data.result.allClass;
        },error=>{
          console.log("error");
        })
      },
      getProductsBySClass(){
        axios({
          url:'/products/SClass',
          params:{
            secondClass:"321",
            firstClass:"54321"
          },
        }).then(res=>{
          this.tempdata1 = res.data.result.allProducts;
        },error=>{
          console.log("error");
        })
      },
      mergeTempt1a2(){
        console("fcdx");

      }
    },
  mounted: function(){
    this.getAllProducts();
    this.getClass();
    this.getProductsBySClass();
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
</style>
