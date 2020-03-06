import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/',redirect:'/home'},
  {path: '/home',name: 'Home',component: ()=>import('views/home/Home.vue')},
  {path: '/cart',name: 'cart',component: ()=>import('views/cart/Cart.vue')},
  {path: '/category',name: 'category',component: ()=>import('views/category/Category.vue')}
]

const router = new VueRouter({
  routes
})

export default router
