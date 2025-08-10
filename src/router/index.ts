import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Auth from '../views/Auth.vue'
import Statistic from '../views/Statistic.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: "/auth",
    name: "Login Signup",
    component: Auth,
  },
  {
    path: "/dataChart",
    name: "Bacacay Data Chart",
    component: Statistic,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
