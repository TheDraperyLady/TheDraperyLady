import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import ElegantHomeView from '../views/ElegantHomeView.vue'
import ProductsView from '../views/ProductsView.vue'

const router = createRouter({
  // Use memory history for SSR, web history for client
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // Handle hash-based navigation
    console.log('to', to)
    if (to.hash) {
      console.log('hash navigation', to.hash)
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80, // Offset for fixed header if you have one
      }
    }
    
    // Handle saved position (back/forward navigation)
    if (savedPosition) {
      return savedPosition
    }
    
    // Default: scroll to top for page navigation
    return {
      top: 0,
      behavior: 'instant',
    }
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
