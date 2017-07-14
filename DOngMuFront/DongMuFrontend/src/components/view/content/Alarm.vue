<template>
  <div class="">
  <h1>提醒服务</h1>
  <template>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <div class="" v-for="city in cities">
      <el-checkbox v-model="checked">{{city}}</el-checkbox>
    </div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </template>
  </div>
</template>
<script>
  const cityOptions = ['上海nhbgvfcdxsjyhtgrfdeskjuhygtfcrdxszjuhygtfrds', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkAll: true,
        checkedCities: ['上海', '北京'],
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
