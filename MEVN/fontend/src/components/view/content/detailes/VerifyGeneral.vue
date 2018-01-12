<template lang="html">
<div class="">
  <el-table
    :data="tableData"
    stripe
    show-summary
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
          @click.native.prevent="editRow(scope.$index, tableData)"
          type="text"
          size="small">
          修改
        </el-button>
      </template>
    </el-table-column>
  </el-table>

   <el-dialog title="加入购物车" :visible.sync="editGeneral">
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
       <el-button type="primary" @click="handleCart">确 定</el-button>
     </div>
   </el-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      editGeneral:false,
      tableData: [
        {
          name:"东沐花洒",
          code:"DM-30", //商品货号
          spec:"80*80", //规格
          price:"1900",//规定卖价
          num:1,
          unit:"个"
        },
    ],
    product:
      {
        name:"东沐花洒",
        code:"DM-30", //商品货号
        spec:"80*80", //规格
        price:"1900",//规定卖价
        num:1,
        unit:"个"
      },
    }
  },
  computed: {},
  ready () {},
  attached () {},
  mounted:function(){
    this.queryCart();
  },
  methods: {
    editRow(index,row){
      this.editGeneral=true;
      console.log(index);
      console.log(row);
    },
    queryCart(){
      this.$http({
        url:'/customer/cart',
      }).then(res=>{
        var data = res.data.result.products;
        var cart = res.data.result.cartList;
        var result=[];
        for(var m =0;m<data.length;m++){
          for(var n =0;n<cart.length;n++){
            if(data[m].id == cart[n]._id){
              result[m] = {};
              result[m].proId=data[m].id;
              result[m].price=data[m].salePrice;
              result[m].num=data[m].saleNumber;
              // result[m].unit=data[m].unit;
              result[m].name=cart[n].name;
              result[m].spec=cart[n].spec;
              result[m].code=cart[n].code;
            }
          }
        }
        this.tableData=result
      },error=>{
        console.log("查询不到数据");
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
