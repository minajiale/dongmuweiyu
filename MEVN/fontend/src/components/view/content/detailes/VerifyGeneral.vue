<template lang="html">
<div class="">
  <el-table
    :data="tableData"
    stripe
    show-summary
    style="width: 100%">
    <el-table-column
      prop="name"
      label="名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="code"
      label="货号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="spec"
      label="规格"
      width="150">
    </el-table-column>
    <el-table-column
      prop="unit"
      label="单位"
      width="150">
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价"
      width="150">
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="150">
    </el-table-column>
    <el-table-column
      sortable
      prop="price"
      width="150"
      label="金额(元)">
    </el-table-column>
    <el-table-column
      label="操作"
      width="120">
      <template slot-scope="scope">移除
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  data () {
    return {
              tableData: [
                {
                  name:"东沐花洒",
                  code:"DM-30", //商品货号
                  spec:"80*80", //规格
                  price:"1900",//规定卖价
                  num:1,
                  unit:"个"
                },
                {
                  name:"东沐花洒",
                  code:"DM-30", //商品货号
                  spec:"80*80", //规格
                  price:"1900",//规定卖价
                  num:1,
                  unit:"个"
                },
                {
                  name:"东沐花洒",
                  code:"DM-30", //商品货号
                  spec:"80*80", //规格
                  price:"1900",//规定卖价
                  num:1,
                  unit:"个"
                },
            ]
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
