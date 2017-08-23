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
       sortable
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
   <div class="">
      合计:
   </div>

   <br>
   <el-form>
   <el-form-item>
     <el-button type="primary" @click="onSubmit">立即创建</el-button>
     <el-button>取消</el-button>
   </el-form-item>
 </el-form>
  </div>
</template>

<script>
import orderDoor from './OderDoor.vue'
  export default {
    components:{
      orderDoor
    },
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
        }],
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
