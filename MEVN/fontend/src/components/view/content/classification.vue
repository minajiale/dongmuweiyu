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
      :data="data2"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      :expand-on-click-node="false"
      :render-content="renderContent"
      :filter-node-method="filterNode"
      ref="tree2">
    </el-tree>

    <el-dialog title="新增分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="一级分类" :label-width="formLabelWidth">
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
import axios from 'axios'
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
      },
      getClass(){
        axios({
          url:'/class',
          params:{
            userId:"12"
          },
          headers:{
            token:"gtfrdes"
          }
        }).then(res=>{
          var result = res.data;
          this.data2=result.result.lsit;
        },error=>{
          consolr.log("error");
        })
      }
    },

    data() {
      return {
        msg:"",
        filterText: '',
        data2: [
          {
            "_id": "599ed4678dfe497594f875ff",
            "label": "一级 2",
            "children": [
              {
                "goodsList": [
                  1,
                  2,
                  3,
                  45
                ],
                "label": "二级 2-1"
              },
              {
                "goodsList": [
                  6,
                  87,
                  9,
                  10
                ],
                "label": "二级 2-2"
              }
            ],
            "producList": []
          }
        ],
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
    },
    mounted: function(){
      this.getClass();
    }
  };
</script>
<style>
  /*.classificationIn{
    float: right;
    width: 300px;
    position: relative;
    margin-top: -40px;
    right: -100px;
  }*/
  .filter-tree {
    margin-left: 100px;
    width: 900px;
  }
</style>
