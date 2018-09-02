import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: 'Home',
      name: 'Home',
      component: Home
    },
    {
      path: 'Search',
      name: 'Search',
      component: Search
    },
    {
      path: 'Cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
