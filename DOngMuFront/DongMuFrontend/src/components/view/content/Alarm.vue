<template>
  <div class="">
    <h1>提醒服务</h1>
      <div class="check-box-group" >
      <div class="check-box-group-one">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group    v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox class="check-box" v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>

      <div class="check-box-group-two">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group    v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox class="check-box" v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>
<style>
  .check-box{
    display: block;
  }
  .check-box-group{
    display: flex;
    top: 1000px;
  }
</style>
<script>
  const cityOptions = [
    '上海nhbgvfcdxsjyhtgrfdeskjuhygtfcrdxszjuhygtfrds',
    '北京jhgfcdsjhgfcdxsjhgfds',
    '广州',
     '深圳'];
  export default {
    data() {
      return {
        checkAll: true,
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
