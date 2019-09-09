import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Product from '@/components/Product'
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Completed from "../components/Completed";
import Dashboard from "../components/Dashboard";


// const base = process.env.NODE_ENV === 'production'

Vue.use(Router)

export default new Router({
  base: '/~makalv/kasutajaliidesed/prax4',

  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/completed',
      name: 'Completed',
      component: Completed
    }
  ]
})
