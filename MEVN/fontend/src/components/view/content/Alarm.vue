<template>
  <div class="alarm">
    <h1>提醒服务</h1>
    <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="事件"
            width="660">
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>
<style>
  .alarm{
    margin-left: 20px;
    width: 1200px;
  }
  .table{
    /*margin-left: 300px*/
  }
</style>
<script>
  export default {
    data() {
      return {
        tableData: [],
      };
    },
    methods: {
      getLackProduct(){
        this.$http({
          url:'/products/lack',
        }).then(res=>{
          var data = res.data.result.allProducts;
          var temp=[];
          data.forEach((dataitem,dataindex,dataarray)=>{
            var Ifexit = this.tableData.some((item,index,array)=>{
              return (dataitem._id == item._id)
            })
            if(Ifexit == false){
              var temp ={};
              temp.name=dataitem.name+"     的库存为0个或者更少";
              temp._id=dataitem._id;
              temp.date=(new Date());
              this.tableData.push(temp);
            }
          })
        },error=>{
          console.log("error");
        })
      }
    },
    mounted:function(){
      this.getLackProduct()
    },
    components: {},
  };
</script>
