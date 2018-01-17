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
              <span>{{ props.row.all }}</span>
            </el-form-item>
            <el-form-item label="欠款金额">
              <span>{{ props.row.owned }}</span>
            </el-form-item>
            <el-form-item label="已付金额">
              <span>{{ props.row.paied }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
      prop="time"
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
        prop="status">
      </el-table-column>
      <el-table-column
      label="操作"
      width="300px">
        <template scope="scope">
          <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">付款</el-button>
          <el-button
          size="small"
          type="primary"
          @click="handledatail(scope.$index, scope.row)">查看详情</el-button>
          <el-button
          size="small"
          type="danger"
          @click="handleAdd(scope.$index, scope.row)">+</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
      layout="prev, pager, next"
      :total="1000">
      </el-pagination>
    </div>
    <el-dialog title="付款" :visible.sync="dialogFormVisible">
      <el-form :model="order">
        <el-form-item label="请输入付款金额">
          <el-input v-model="order.paied" auto-complete="off"></el-input>
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
  import orderDetails from './detailes/ChangeOrder.vue'
  export default {
    data() {
      return {
        order:{
          paied:100
        },
        formLabelWidth: '120px',
        dialogFormVisible: false,
        operateId:0,
        tableData5: [{
          time:"2018-1-10",
          name:"刘那",
          phone:"1111111",
          status:"完成",
          all:19000,
          owned:"1000",
          paied:"0"
        }]
      }
    },
    components:{
      orderDetails
    },
    mounted: function(){
      this.getCustomers();
    },
    methods:{
      getCustomers(){
        this.$http({
          url:"/customer",
        }).then(res=>{
          this.tableData5=res.data.result.allCustomer;
        },error=>{
          this.$notify.error({
            title: '错误',
            message: '获取订单列表失败'
          });
        })
      },
      handleClick(){},
      handleEdit(index, row) {
        this.dialogFormVisible=true;
        console.log(row.id);
        this.operateId=row.id;
      },
      handleCart(){
        this.$http({
          method: 'post',
          url:'/customer/pay',
          data:{
           customerId:this.operateId,
           money:this.order.paied
          }
        }).then(res=>{
          if(res.data.status ==0){
            this.dialogFormVisible=false;
            this.$notify({
              title: '成功',
              message: '付款成功',
              type: 'success'
            });
          }else{
            this.$message.error('付款失败');
          }
        },error=>{
          console.log("error");
          this.$message.error('付款失败');
        })
      },
      handleAdd(index,row){
        console.log(row.id);
        this.$http.post("/customer/loginOut").then((response)=>{
          let res=response.data;
          if(res.status == 0){
            this.$http({
              method:'post',
              url:'/customer/login',
              data:{
                customer:row.id,
              }
            }).then((res)=>{
              //并且改变store中的customerName的值
              this.$router.push('/order/addOrder');
              var customername = res.data.result.managerName;
              this.$store.commit('updatecustomerName',customername);
              this.insert(customerId);
            },(error)=>{
              this.$notify.error({
                title: '错误',
                message: '顾客登录失败'
              });
            })
          }else{
            this.$message.error('退出登录失败');
          }
        })
      },
      handledatail(index, row) {
        this.$router.push("/customerCenter")
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
