import { createRouter, createWebHistory } from 'vue-router'
import AllProducts from '../views/AllProducts'
import CartCheckout from '../views/CartCheckout';
import PaypalCheckout from '../views/PaypalCheckout'
const routes = [
  {
    path: '/',
    name: 'main',
    component:AllProducts
  },
  {
    path: '/heber',
    name: 'Heber',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Heber.vue')
  },{
    path: '/aggregat',
    name: 'Aggregat',
    component:()=>import('@/views/Aggregat.vue')
  },
  {
    path: '/aufzugzubehoer',
    name: 'Aufzugzubehoer',
    component:()=>import('@/views/AufzugZubehoer.vue')
  },
  
  {
     path: '/product-details',
     name:'product',
     component:()=>import ('@/views/Product.vue')

  },{
    path: '/checkout',
    name: 'Checkout',
    component: CartCheckout,
  },
  {
    path:'/paypal',
    name:'Paypal',
    component:PaypalCheckout 


  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
