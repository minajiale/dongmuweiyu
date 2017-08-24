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
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
      };
    },
  };
</script>
