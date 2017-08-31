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

    <el-dialog title="新增一级分类" :visible.sync="dialogFormVisible">
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


  <el-dialog title="编辑分类" :visible.sync="editClassVisible">
    <el-form :model="form">
      <el-form-item label="分类名字" :label-width="formLabelWidth">
        <el-input v-model="form.editClass" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="editClassVisible = false">取 消</el-button>
      <el-button type="primary" @click="editClassSucess">确 定</el-button>
    </div>
  </el-dialog>

  <el-dialog title="增加二级分类" :visible.sync="addSecondVisible">
    <el-form :model="form">
      <el-form-item label="二级分类" :label-width="formLabelWidth">
        <el-input v-model="form.addSecond" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addSecondVisible = false">取 消</el-button>
      <el-button type="primary" @click="addSecondSucess">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
  let id = 1000;
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    data() {
      return {
        editClassVisible:false,
        addSecondVisible:false,
        dialogFormVisible: false,
        msg:"",
        filterText: '',
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: []
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1',
            children: []
          }, {
            id: 6,
            label: '二级 2-2',
            children: []
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1',
            children: []
          }, {
            id: 8,
            label: '二级 3-2',
            children: []
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
      form: {
          name: '',
          addSecond:'',
          editClass:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        temp:null,
        position:0,
      };
    },

    methods: {
      append(store, data) {
        this.addSecondVisible=true;
        var that=this;
        return function(){
          store.append({ id: id++, label: that.form.addSecond, children: [] }, data);
        }
      },
      addSecondSucess(){
        var that=this;
        that.temp()();
        this.addSecondVisible=false;
        that.temp=null;
      },
      editClassSucess(){
        var that=this;
        console.log(that.position);
        that.editClassVisible=false;
      },
      remove(store, data) {
        store.remove(data);
      },
      edit(data){
        var that=this;
        that.editClassVisible=true;
        // 为什么此时的data2为undefined
        // var position = that.data2.indexOf(data);
        that.position=data.id;
      },
      renderContent(h, { node, data, store }) {
        var that=this;
        if(data.children.length != 0){
          return (
            <span>
              <span>
                <span>{node.label}</span>
              </span>
              <span style="float: right; margin-right: 20px;margin-top:-40px;">
              <el-button size="mini" on-click={  that.editTemp=()=>this.edit(data) }>编辑</el-button>
                <el-button size="mini" on-click={ this.temp=() => this.append(store, data)}>增加</el-button>
                <el-button size="mini" on-click="this.remove(store, data)">删除</el-button>
              </span>
            </span>);
        }else{
          return(
            <span>
              <span>
                <span>{node.label}</span>
              </span>
              <span style="float: right; margin-right: 20px;margin-top:-40px;">
                <el-button size="mini" on-click={ () => this.edit(store, data) }>编辑</el-button>
                <el-button size="mini" on-click={ () => this.remove(store, data) }>删除</el-button>
              </span>
            </span>
          )
        }
      },
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
    mounted: function(){
      this.getClass();
    }
  };
</script>
<style>
  .el-tree{
    width: 600px;
  }
  .filter-tree {
    margin-left: 100px;
    width: 900px;
  }
</style>
