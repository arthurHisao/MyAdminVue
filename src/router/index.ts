import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

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
        }
      ],
      component: () => import('../views/admin/AdminView.vue')
    }
  ], 
})

router.beforeEach((to) => {
  const appStore = useAppStore()
  const { isLoggedIn } = storeToRefs(appStore)

  if (to.meta.requiredAuth && isLoggedIn.value == false) {
    return {
      path: '/login'
    }
  }
})

export default router
