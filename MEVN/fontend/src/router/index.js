import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import Index from '@/components/Index'
import Test from '@/components/test.vue'
import Testtwo from '@/components/testTwo.vue'
import Analyse from '@/components/view/content/Analyse.vue'
import AddProduct from '@/components/view/content/detailes/AddProduct.vue'
import VerifyOrder from '@/components/view/content/detailes/VerifyOrder.vue'
import AddOrder from '@/components/view/content/detailes/AddOrder.vue'
import Alarm from '@/components/view/content/Alarm.vue'
import Finance from '@/components/view/content/Finance.vue'
import Order from '@/components/view/content/Order.vue'
import Peoplemanage from '@/components/view/content/Peoplemanage.vue'
import Products from '@/components/view/content/Products.vue'
import classification from '@/components/view/content/classification.vue'
import customerCenter from '@/components/view/content/CustomerCenter.vue'
import managerCenter from '@/components/view/content/ManagerCenter.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

import noadmin from '@/components/noadmin'
import NVerifyOrder from '@/components/noadminview/content/detailes/VerifyOrder.vue'
import NAddOrder from '@/components/noadminview/content/detailes/AddOrder.vue'
import NAlarm from '@/components/noadminview/content/Alarm.vue'
import NOrder from '@/components/noadminview/content/Order.vue'
import NProducts from '@/components/noadminview/content/Products.vue'
import Nclassification from '@/components/noadminview/content/classification.vue'
import NcustomerCenter from '@/components/noadminview/content/CustomerCenter.vue'
import NmanagerCenter from '@/components/noadminview/content/ManagerCenter.vue'



Vue.use(Router)

const routes = [
      {
          path: '/admin',
          meta: {
            // requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          components: {
            default: Index,
            rightContent: Analyse
          },
          children:[
            {
              path: '/test',
                requireAuth: true,
              components: {
                default: Index,
                rightContent: Test
              },
            },
            {
              path: '/',
                requireAuth: true,
              components: {
                default: Index,
                rightContent: Products
              },
            },
            {
              path: '/customerCenter',
                requireAuth: true,
              components: {
                default: Index,
                rightContent: customerCenter
              },
            },
            {
              path: '/managerCenter',
                requireAuth: true,
              components: {
                default: Index,
                rightContent: managerCenter
              },
            },
            {
              path: '/testtwo',
              components: {
                default: Index,
                rightContent: Testtwo
              },
            },
            {
              path: '/product/addProduct',
              components: {
                default: Index,
                rightContent: AddProduct
              },
            },
            {
              path: '/order/addOrder/verify',
              components: {
                default:Index,
                rightContent: VerifyOrder
              },
            },
              {
                path: '/order/addOrder',
                components: {
                  default: Index,
                  rightContent: AddOrder
                },
              },
              {
                  path: '/analyse',
                  components: {
                    default: Index,
                    rightContent: Analyse
                  },
              },
              {
                  path: '/alarm',
                  components: {
                    default: Index,
                    rightContent: Alarm
                  },
              },
              {
                  path: '/finance',
                  components: {
                    default: Index,
                    rightContent: Finance
                  },
              },
              {
                  path: '/order',
                  components: {
                    default:Index,
                    rightContent: Order
                  },
              },
              {
                  path: '/peopleManage',
                  components: {
                    default: Index,
                    rightContent: Peoplemanage
                  },
              },
              {
                  path: '/products',
                  components: {
                    default: Index,
                    rightContent: Products
                  },
              },
              {
                  path: '/classification',
                  components: {
                    default: Index,
                    rightContent: classification
                  },
              },
          ]
      },
      {
          path: '/',
          component: Login
      },
      {
        path: '/register',
        component: Register
      },
      {
          path: '/noadmin',
          meta: {
            // requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          components: {
            default: noadmin,
            rightContent: NOrder
          },
          children:[
            {
              path: '/',
                requireAuth: true,
              components: {
                default: noadmin,
                rightContent: NProducts
              },
            },
            {
              path: '/ncustomerCenter',
                requireAuth: true,
              components: {
                default: noadmin,
                rightContent: NcustomerCenter
              },
            },
            {
              path: '/nmanagerCenter',
                requireAuth: true,
              components: {
                default: noadmin,
                rightContent: NmanagerCenter
              },
            },
            {
              path: '/norder/addOrder',
              components: {
                default: noadmin,
                rightContent: NAddOrder
              },
            },
            {
              path: '/norder/addOrder/verify',
              components: {
                default:noadmin,
                rightContent: NVerifyOrder
              },
            },
              {
                  path: '/nalarm',
                  components: {
                    default: noadmin,
                    rightContent: NAlarm
                  },
              },
              {
                  path: '/norder',
                  components: {
                    default:noadmin,
                    rightContent: NOrder
                  },
              },
              {
                  path: '/nproducts',
                  components: {
                    default: noadmin,
                    rightContent: NProducts
                  },
              },
              {
                  path: '/nclassification',
                  components: {
                    default: noadmin,
                    rightContent: Nclassification
                  },
              },
          ]
      },
  ];

  const router = new Router({
      routes
  });

  router.beforeEach((to, from, next) => {
      if (to.matched.some(r => r.meta.requireAuth)) {
          if (store.state.token) {
            if(this.getCookie(managerId) != -1 && this.getCookie(managerId) != ''&& this.getCookie(managerId) != undefined )
              next();
          }
          else {
              next({
                  path: '/',
                  query: {redirect: to.fullPath}
              })
          }
      }
      else {
          next();
      }
  })

export default router;

// export default new Router({})
