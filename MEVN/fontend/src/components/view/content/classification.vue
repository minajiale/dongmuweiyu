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
      node-key="key"
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
        <el-button type="primary" @click="addFirst">确 定</el-button>
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
				_id: "59b360f81315703dcde928e7",
				key: 2,
				label: "花洒系列",
				__v: 0,
				children: []
			},
			{
				_id: "59b361291315703dcde928e8",
				key: 2,
				label: "拉拉",
				__v: 0,
				children: []
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
        eddTemp:undefined,
        addTemp:undefined,
        deleteTemp:undefined,
        fatherKey:''
      };
    },

    methods: {
      addFirst(){
        this.dialogFormVisible = false;
        this.insertFirstClass();
      },
      append(store, data) {
        this.addSecondVisible=true;
        var that=this;
        this.addTemp=data._id;
      },
      addSecondSucess(){
        var that=this;
        this.addSecondVisible=false;
        this.insertSecondClass();
      },
      editClassSucess(){
        var that=this;
        that.editClassVisible=false;
        this.editClass();
      },
      findFatherByChild(data,childId){
        let father = data.map(function(item,index){
          if(item.children._id == childId){
            return item._id
          }
        })
        return father[0]
      },
      remove(node,data,store) {
        this.deleteClass(data._id);
        this.fatherKey = this.findFatherByChild(node.root.data);
      },
      edit(data){
        var that=this;
        that.editClassVisible=true;
        that.eddTemp=data._id
      },
      renderContent(h, { node, data, store }) {
        var that=this;
        if(data.children != null){
          return (
            <span>
              <span>
                <span>{node.label}</span>
              </span>
              <span style="float: right; margin-right: 20px;margin-top:-40px;">
                <el-button size="mini" on-click={  that.editTemp=()=>this.edit(data) }>编辑</el-button>
                <el-button size="mini" on-click={ this.temp=() => this.append(store, data)}>增加</el-button>
                <el-button size="mini" on-click={  ()=>this.remove(node,data,store) }>删除</el-button>
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
          this.data2 = res.data.result.allClass;
        },error=>{
          console.log("error");
        })
      },
      insertFirstClass(){
        axios({
          method: 'post',
          url:"/class/insertFirst",
          data:{
            name:this.form.name,
          }
        }).then(res=>{
          if(res ==0){
            alert("res.message")
          }else{
            alert("插入成功")
          }
        },error=>{
          console.log("error");
        })
        this.form.name="";
      },
      insertSecondClass(){
        axios({
          method: 'post',
          url:"/class/insertSecond",
          data:{
            name:this.form.addSecond,
            father:this.addTemp
          }
        }).then(res=>{
          if(res ==0){
            alert("res.message")
          }else{
            alert("插入成功")
          }
        },error=>{
          console.log("error");
        })
        this.form.name="";
      },
      editClass(){
        axios({
          method: 'post',
          url:"/class/edit",
          data:{
            id:this.eddTemp,
            label:this.form.editClass
          }
        }).then(res=>{
          if(res ==0){
            alert("res.message")
          }else{
            console.log(res)
          }
        },err=>{
          console.log("error");
        })
      },
      deleteClass(key){
        axios({
          method: 'post',
          url:"/class/delete",
          data:{
            id:key,
            fatherId:this.fatherKey
          }
        }).then(res=>{
          if(res ==0){
            alert("res.message")
          }else{
            console.log(res.data)
          }
        },err=>{
          console.log("error");
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
