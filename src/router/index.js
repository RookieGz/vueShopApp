import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import register from '@/components/register'
import goodsMessage from '@/components/goodsMessage'
import order from '@/components/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/reg',
      name: 'register',
      component: register
    },{
      path: '/goodsMessage',
      name: 'goodsMessage',
      component: goodsMessage
    },{
      path: '/order',
      name: "order",
      component: order
    }
  ]
})
