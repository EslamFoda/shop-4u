import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../components/Details.vue'
import Wishlist from '../components/Wishlist.vue'
import Cart from '../components/Viewcart.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/product/:id',
    name:'Product',
    component:Product,
    props: true
  },
  {
    path:'/wishlist',
    name:'Wishlist',
    component:Wishlist
  },
  {
    path:'/cart',
    name:'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
