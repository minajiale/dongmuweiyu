import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '/',
            components: {
              default: resolve => require(['../components/Index.vue'], resolve),
              rightContent: resolve => require(['../components/view/content/Analyse.vue'], resolve)
            },
            children:[
                {
                    path: '/analyse',
                    components: {
                      default: resolve => require(['../components/Index.vue'], resolve),
                      rightContent: resolve => require(['../components/view/content/Analyse.vue'], resolve)
                    },
                },
                {
                    path: '/alarm',
                    components: {
                      default: resolve => require(['../components/Index.vue'], resolve),
                      rightContent: resolve => require(['../components/view/content/Alarm.vue'], resolve)
                    },
                },
                {
                    path: '/finance',
                    components: {
                      default: resolve => require(['../components/Index.vue'], resolve),
                      rightContent: resolve => require(['../components/view/content/Finance.vue'], resolve)
                    },
                },
                {
                    path: '/order',
                    components: {
                      default: resolve => require(['../components/Index.vue'], resolve),
                      rightContent: resolve => require(['../components/view/content/Order.vue'], resolve)
                    },
                },
                {
                    path: '/peopleManage',
                    components: {
                      default: resolve => require(['../components/Index.vue'], resolve),
                      rightContent: resolve => require(['../components/view/content/Peoplemanage.vue'], resolve)
                    },
                },
                {
                    path: '/products',
                    components: {
                      default: resolve => require(['../components/Index.vue'], resolve),
                      rightContent: resolve => require(['../components/view/content/Products.vue'], resolve)
                    },
                },
                {
                    path: '/classification',
                    components: {
                      default: resolve => require(['../components/Index.vue'], resolve),
                      rightContent: resolve => require(['../components/view/content/classification.vue'], resolve)
                    },
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/view/dashboad/Login.vue'], resolve)
        },
    ]
})
