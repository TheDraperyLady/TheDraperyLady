import { createRouter, createWebHistory } from 'vue-router'
import ElegantHomeView from '../views/ElegantHomeView.vue'
import ProductsView from '../views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: ElegantHomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/product/:type',
      name: 'product-detail',
      component: () => import('../views/ProductDetailView.vue'),
    },
  ],
})

export default router
