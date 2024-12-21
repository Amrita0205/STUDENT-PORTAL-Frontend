// This is the routing file for the application
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import SecondComponent from '../components/second.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // redirect: '/login',
      component: DashboardPage,
    },
    {
      path: '/second',
      component: SecondComponent,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
    },
  ],
})

export default router
