<template>
  <div class="">
    <el-table
      :data="tableData"
      stripe
      show-summary
      style="width: 100%">
      <el-table-column
        prop="date"
        label="品名及规格"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="单位"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="单价">
      </el-table-column>
      <el-table-column
        sortable
        prop="price"
        label="金额(元)">
      </el-table-column>
    </el-table>
    <el-collapse-item title="定门单" name="1">
      <order-door></order-door>
    </el-collapse-item>
  </div>
</template>

<script>
import orderDoor from './OderDoor.vue'
  export default {
    components:{
      orderDetails
    },
    data() {
      return {
        tableData: [{
          price:"33",
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
        }]
      }
    }
  }
</script>
