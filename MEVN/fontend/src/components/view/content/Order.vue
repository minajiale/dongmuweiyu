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
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
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
        label="商品 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="desc">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">失效订单</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="修改产品" :visible.sync="dialogFormVisible">
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
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          date: '2016-05-02',
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          date: '2016-05-02',
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          date: '2016-05-02',
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
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
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('该订单已被废弃, 是否继续?', '提示', {
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
      }
    }
  }
</script>

<style>
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
