<template>
  <div id="app">
    <login></login>
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/Login.vue'
export default {
  name: 'app',
  components: {
    login,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: -8px;
  margin-left: -60px;
}
</style>
