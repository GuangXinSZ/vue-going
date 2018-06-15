
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入fastClick
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store';
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
/* 引用 */
fastClick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
