<template>
  <div class="">
    <h1>产品分类管理　
      &nbsp <el-button type="text" @click="dialogFormVisible = true"
      style="font-size:40px;margin-left:-30px;">+</el-button></h1>
    <el-input
    class="classificationIn"
    placeholder="输入关键字进行过滤"
    v-model="filterText">
    </el-input>

    <el-tree
      class="filter-tree"
      :data="data2"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree2">
    </el-tree>

    <el-dialog title="新增分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="一级分类" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="二级分类" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },

    data() {
      return {
        filterText: '',
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
      dialogFormVisible: false,
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
        formLabelWidth: '120px'
      };
    }
  };
</script>
<style>
  .classificationIn{
    float: right;
    width: 300px;
  }
  .filter-tree {
    margin-left: 100px;
    width: 900px;
  }
</style>
