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
</div>
</template>

<script>
export default {
  data () {
    return {
              tableData: [
                {
                  name:"东沐花洒",
                  code:"DM-30", //商品货号
                  spec:"80*80", //规格
                  price:"1900",//规定卖价
                  num:1,
                  unit:"个"
                },
                {
                  name:"东沐花洒",
                  code:"DM-30", //商品货号
                  spec:"80*80", //规格
                  price:"1900",//规定卖价
                  num:1,
                  unit:"个"
                },
                {
                  name:"东沐花洒",
                  code:"DM-30", //商品货号
                  spec:"80*80", //规格
                  price:"1900",//规定卖价
                  num:1,
                  unit:"个"
                },
            ]
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
