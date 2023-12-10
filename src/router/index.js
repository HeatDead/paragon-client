import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'carList',
      component: () => import('../views/CarListView.vue')
    },{
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegistrationView.vue')
    },
    {
      path: '/carInfo/:id',
      name: 'carInfo',
      component: () => import('../views/CarInfoView.vue')
    },
    {
      path: '/admin',
      name: 'adminPanel',
      component: () => import('../views/AdminPanelView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    }
  ]
})

export default router
