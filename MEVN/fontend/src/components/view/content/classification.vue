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
      :default-expand-all=true
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
        <el-input v-model="form.editClass" auto-complete="off">{{eddTemp}}</el-input>
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
        data2: [],
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
        var key =data._id;
        var fatherKey= this.findFatherByChild(node.root.data);
      },
      edit(node,data,store){
        console.log(node);
        // var fatherKey= this.findFatherByChild(node.root.data);
        var that=this;
        that.editClassVisible=true;
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
                <el-button size="mini" on-click={  ()=>this.edit(node,data,store) }>编辑</el-button>
                <el-button size="mini" on-click={  () => this.append(store, data)}>增加</el-button>
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
                <el-button size="mini" on-click={ () => this.edit(node,data,store) }>编辑</el-button>
                <el-button size="mini" on-click={ () => this.remove(node,store, data) }>删除</el-button>
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
            this.$notify.error({
              title: '错误',
              message: '新增一级分类失败失败'
            });
          }else{
            this.$notify({
               title: '成功',
               message: '新增一级分类成功',
               type: 'success'
             });
          }
          this.data2
        },error=>{
          this.$notify.error({
            title: '错误',
            message: '新增一级分类失败失败'
          });
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
            this.$notify.error({
              title: '错误',
              message: '新增二级分类失败失败'
            });
          }else{
            this.$notify({
               title: '成功',
               message: '新增二级分类成功',
               type: 'success'
             });
          }
        },error=>{
          this.$notify.error({
            title: '错误',
            message: '新增二级分类失败失败'
          });
        })
        this.form.name="";

      },
      editClass(key,fatherKey){
        axios({
          method: 'post',
          url:"/class/edit",
          data:{
            id:key,
            fatherId:fatherKey,
            label:this.form.editClass
          }

        }).then(res=>{
          if(res ==0){
            this.$notify.error({
              title: '错误',
              message: '编辑分类失败失败'
            });
          }else{
            this.$notify({
               title: '成功',
               message: '编辑分类成功',
               type: 'success'
             });
          }
        },err=>{
          this.$notify.error({
            title: '错误',
            message: '编辑分类失败失败'
          });
        })
      },
      deleteClass(key,fatherKey){
        axios({
          method: 'post',
          url:"/class/delete",
          data:{
            id:key,
            fatherId:fatherKey
          }
        }).then(res=>{
          if(res ==0){
            this.$notify.error({
              title: '错误',
              message: '删除分类失败失败'
            });
          }else{
            this.$notify({
               title: '成功',
               message: '删除分类成功',
               type: 'success'
             });
          }
        },err=>{
          this.$notify.error({
            title: '错误',
            message: '删除分类失败失败'
          });
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
