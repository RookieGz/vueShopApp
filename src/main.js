// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//vuex注册
import store from './vuex/store'
//mint-ui的按需引入
import {Tabbar,TabItem,TabContainer,TabContainerItem,Cell,Button,Navbar,Header} from 'mint-ui'

Vue.config.productionTip = false
//注册mt全局组件
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)
Vue.component(Button.name, Button)
Vue.component(Navbar.name, Navbar)
Vue.component(Header.name, Header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
