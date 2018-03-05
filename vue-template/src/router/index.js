import Vue from 'vue'
import Router from 'vue-router'
import  Index from '@/container/index/index'
import  Ratings from '@/container/index/ratings'
import  Seller from '@/container/index/seller'
// import User from '@/components/user/user'
// import CodeList from '@/components/codeList/codeList'
// import OrderList from '@/components/order/order'
// import Stand from '@/components/shopstand/shopstand'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/rating',
      name: 'rating',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    // {
    //   path: '/codelist',
    //   name: 'codelist',
    //   component: CodeList
    // },
    // {
    //   path: '/orderlist',
    //   name: '/orderlist',
    //   component: OrderList
    // }
    
  ]
})
