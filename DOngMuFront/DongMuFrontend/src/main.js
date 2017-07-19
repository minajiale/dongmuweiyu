// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
Vue.config.debug = true;
import store from './store/store'


Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app', //监听的内容是app,也就是id=app的div中的任何元素都可以被vue操控
  router,
  template: '<App/>',
  components: { App },
  store,      // 子组件通过this.$store来store
  //axios, 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
})
