import { createRouter, createWebHistory } from 'vue-router'
import Shopview from '../views/Shopview.vue'
import AdminLayoutView from '../views/admin/AdminLayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Shopview
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayoutView,
      children: [
        {
          path: 'productos',
          name: 'products',
          component: () => import('../views/admin/ProductsView.vue')
        },
        {
          path: 'productos/nuevo',
          name: 'new-product',
          component: () => import('../views/admin/NewProductView.vue')
        },
        {
          path: 'ventas',
          name: 'sales',
          component: () => import('../views/admin/SalesView.vue')
        },

      ]
    }
  ]
})

export default router
