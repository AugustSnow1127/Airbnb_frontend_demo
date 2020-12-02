import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import { auth } from '@/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    // meta: {
    //   requiresAuth: true
    // }
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
  },
  {
    path: '/resetpassword',
    name: 'ResetPasswordPage',
    component: () => import(/* webpackChunkName: "resetpassword" */ '../views/ResetPasswordPage.vue')
  },
  {
    path: '/becomehost/rooms',
    name: 'rooms',
    component: () => import(/* webpackChunkName: "room" */ '../views/BecomeHost/rooms.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost',
    name: 'BecomeHostPage',
    component: () => import(/* webpackChunkName: "becomehost" */ '../views/BecomeHost/BecomeHostPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    alert("請先登入")
    next('/login')
  } else {
    next()
  }
})

export default router
