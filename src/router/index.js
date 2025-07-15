import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModernHomeView from '../views/ModernHomeView.vue'
import ElegantHomeView from '../views/ElegantHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'warm-home',
      component: HomeView,
    },
    {
      path: '/modern',
      name: 'modern-home',
      component: ModernHomeView,
    },
    {
      path: '/elegant',
      name: 'elegant-home',
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
  ],
})

export default router
