import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/app'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      children: [
        {
          path: '',
          component: () => import('../pages/LoginPage.vue')
        },
      ],
      component: () => import('../views/GuestView.vue'),
    },
    {
      path: '/admin',
      children: [
        {
          path: '',
          component: () => import('../pages/DashboardPage.vue'),
          meta: { requiredAuth: true }
        },
        {
          path: '/products',
          component: () => import('../pages/ProductPage.vue'),
          meta: { requiredAuth: true }
        }
      ],
      component: () => import('../views/admin/AdminView.vue')
    }
  ], 
})

router.beforeEach((to) => {
  const appStore = useAppStore()
  // const { isLoggedIn } = storeToRefs(appStore)
  const { isAuth } = appStore

  if (to.meta.requiredAuth && !isAuth()) {
    return {
      path: '/login'
    }
  }
})

export default router
