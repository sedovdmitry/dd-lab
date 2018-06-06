import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import All from '@/components/All'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/all',
      name: 'All',
      component: All
    }
  ]
})
