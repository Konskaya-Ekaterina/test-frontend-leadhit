import {createRouter, createWebHistory} from 'vue-router'
import Auth from '@/views/Auth.vue'
import Analytics from '@/views/Analytics.vue'

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    const isLoggedIn = localStorage.getItem('leadhit-site-id')
    if (isLoggedIn) {
      next();
    } else {
      router.push({ path: '/' });
    }
  } else {
    next();
  }
})

export default router
