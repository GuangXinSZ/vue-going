
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入fastClick
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'

Vue.config.productionTip = false
/* 引用 */
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
