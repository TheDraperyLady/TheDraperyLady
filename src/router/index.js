import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import ElegantHomeView from '../views/ElegantHomeView.vue'
import ProductsView from '../views/ProductsView.vue'

const router = createRouter({
  // Use memory history for SSR, web history for client
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating between pages
    // This prevents scroll position from being preserved
    // Use instant behavior to prevent smooth scrolling
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

// Global navigation guard to force scroll to top
router.beforeEach((to, from, next) => {
  // Force scroll to top on every navigation
  if (typeof window !== 'undefined') {
    // Use multiple methods to ensure scroll reset
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }
  next()
})

export default router
