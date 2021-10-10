import Vue from 'vue'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import loading  from './common/imgs/loading.gif'
import './filters'//加载过滤器

import './mock/mockServer' //加载mockServer即可
Vue.config.productionTip = false

// 注册全局组件
Vue.component(Button.name, Button)
Vue.use(VueLazyload,{
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
