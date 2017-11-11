import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Commody from '@/views/commodity/frame.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index
    },
    {
      path: '/commodies/commody',
      name: 'Commody',
      component: Commody
    }
  ]
})
