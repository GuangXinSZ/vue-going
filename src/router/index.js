import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/Detail'
import Search from '@/pages/search/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
