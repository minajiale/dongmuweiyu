<template>
<div class="">
  <el-table
   :data="tableData3"
   border
   style="width: 100%">
   <el-table-column
     prop="date"
     label="型号"
     width="150">
   </el-table-column>
   <el-table-column
     prop="date"
     label="颜色"
     width="150">
   </el-table-column>
   <el-table-column label="门洞尺寸">
     <el-table-column
       prop="name"
       label="高"
       width="120">
     </el-table-column>
     <el-table-column
       prop="name"
       label="宽"
       width="120">
     </el-table-column>
     <el-table-column
       prop="name"
       label="厚"
       width="120">
     </el-table-column>
   </el-table-column>
   <el-table-column label="门扇尺寸">
     <el-table-column
       prop="name"
       label="高"
       width="120">
     </el-table-column>
     <el-table-column
       prop="name"
       label="宽"
       width="120">
     </el-table-column>
   </el-table-column>
   <el-table-column
     prop="date"
     label="门套线条类型"
     width="150">
   </el-table-column>
   <el-table-column
     prop="date"
     label="数量"
     width="150">
   </el-table-column>
   <el-table-column
     prop="date"
     label="金额(元)"
     width="120">
   </el-table-column>
   <el-table-column
     prop="date"
     label="备注"
     width="150">
   </el-table-column>
 </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
