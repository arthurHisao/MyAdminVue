import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/GuestView.vue')
    },
    {
      path: '/admin',
      children: [
        {
          path: '',
          component: () => import('../pages/DashboardPage.vue')
        }
      ],
      component: () => import('../views/admin/AdminView.vue')
    }
  ], 
})

export default router
