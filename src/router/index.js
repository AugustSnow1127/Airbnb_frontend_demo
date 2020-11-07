import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
      name: 'LoginPage',
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue')
  },
  {
    path: '/signup',
      name: 'SignupPage',
      component: () => import(/* webpackChunkName: "signup" */ '../views/SignupPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
