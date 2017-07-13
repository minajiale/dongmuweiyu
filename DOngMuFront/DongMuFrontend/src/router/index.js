import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
        {
          path: '/',
          component: resolve => require(['../components/Index.vue'], resolve),
        },
        {
            path: '/',
            component: resolve => require(['../components/Index.vue'], resolve),
            children:[
                {
                    path: '/analyse',
                    component: resolve => require(['../components/view/content/Analyse.vue'], resolve)
                },
                {
                    path: '/alarm',
                    component: resolve => require(['../components/view/content/Alarm.vue'], resolve)
                },
                {
                    path: '/finance',
                    component: resolve => require(['../components/view/content/Finance.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/order',
                    component: resolve => require(['../components/view/content/Order.vue'], resolve)
                },
                {
                    path: '/peopleManage',
                    component: resolve => require(['../components/view/content/Peoplemanage.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/products',
                    component: resolve => require(['../components/view/content/Products.vue'], resolve)     // Vue-Quill-Editor组件
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/view/dashboad/Login.vue'], resolve)
        },
    ]
})
