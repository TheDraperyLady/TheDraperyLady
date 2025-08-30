import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import ElegantHomeView from '../views/ElegantHomeView.vue'
import ProductsView from '../views/ProductsView.vue'

const router = createRouter({
  // Use memory history for SSR, web history for client
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100, // Offset for fixed header
      }
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/consultation',
      name: 'consultation',
      component: () => import('../views/ConsultationView.vue'),
    },
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
