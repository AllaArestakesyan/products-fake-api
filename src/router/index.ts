import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addProduct',
    name: 'Add Product',
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/DetailsProduct.vue')
  },
  {
    path: '/addCategory',
    name: 'Add Category',
    component: () => import('../views/AddCategory.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
