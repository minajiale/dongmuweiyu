<template>
  <div class="">
    <h1>订单管理 &nbsp<router-link to="/order/addOrder">+</router-link></h1>
    <div class="additional-crew">
      <el-input
        class="search"
        placeholder="搜索"
        icon="search"
        v-model="input2"
        :on-icon-click="handleIconClick">
      </el-input>
      <el-dropdown split-button type="primary" @click="handleClick">
    欠款订单
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>已完成订单</el-dropdown-item>
          <el-dropdown-item>预付定金</el-dropdown-item>
          <el-dropdown-item>欠款</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-table
      :data="tableData5"
      style="width: 1000px">
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="订单总金额">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="欠款金额">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
      </el-table-column>
      <el-table-column
        label="顾客姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="顾客联系方式"
        prop="phone">
      </el-table-column>
      <el-table-column
        label="订单状态"
        prop="state">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
          size="small"
          type="primary"
          @click="handledatail(scope.$index, scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
      layout="prev, pager, next"
      :total="1000">
      </el-pagination>
    </div>

    <el-dialog title="修改订单" :visible.sync="dialogFormVisible">
      <order-details></order-details>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    </div>
</template>

<script>
  import orderDetails from './detailes/ChangeOrder.vue'
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',

        dialogFormVisible: false,
        tableData5: [{
          date: '2016-05-02',
          id: '12987122',
          name: '尤玉溪',
          phone: '13177918633',
          state: '进行中',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          date: '2016-05-02',
          id: '12987123',
          name: '将大大',
          phone: '15929159416',
          state: '完成',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          date: '2016-05-02',
          id: '12987125',
          name: '隔壁家的',
          phone: '13607030062',
          state: '欠款',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          date: '2016-05-02',
          id: '12987126',
          name: '尤玉溪',
          phone: '13177918633',
          state: '进行中',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    },
    components:{
      orderDetails
    },
    methods:{
      handleClick(){},
      handleEdit(index, row) {
        this.dialogFormVisible=true;
        console.log(index, row);
      },
      handledatail(index, row) {
        console.log("hgtfrdeshygtfrdeswa")
        this.$router.push("/order/addOrder/verify")
      }
    }
  }
</script>

<style>
  .block{
    margin: 0,auto;
    text-align: center;
    padding-top: 20px;
  }
  .search{
    width: 150px;
  }
  .additional-crew{
    float: right;
    margin-top: -50px;
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
