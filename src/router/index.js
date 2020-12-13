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
    path: '/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title/phone/guest-requirements/house-rules/price/local-law/finish',
    name: 'finish',
    component: () => import(/* webpackChunkName: "finish" */ '../views/BecomeHost/finish.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title/phone/guest-requirements/house-rules/price/local-law',
    name: 'local-law',
    component: () => import(/* webpackChunkName: "local-law" */ '../views/BecomeHost/local-law.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title/phone/guest-requirements/house-rules/price',
    name: 'price',
    component: () => import(/* webpackChunkName: "price" */ '../views/BecomeHost/price.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title/phone/guest-requirements/house-rules',
    name: 'house-rules',
    component: () => import(/* webpackChunkName: "house-rules" */ '../views/BecomeHost/house-rules.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title/phone/guest-requirements',
    name: 'guest-requirements',
    component: () => import(/* webpackChunkName: "guest-requirements" */ '../views/BecomeHost/guest-requirements.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title/phone',
    name: 'phone',
    component: () => import(/* webpackChunkName: "phone" */ '../views/BecomeHost/phone.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title',
    name: 'title',
    component: () => import(/* webpackChunkName: "title" */ '../views/BecomeHost/title.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description',
    name: 'description',
    component: () => import(/* webpackChunkName: "description" */ '../views/BecomeHost/description.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms/location/amenities/spaces/photos',
    name: 'photos',
    component: () => import(/* webpackChunkName: "photos" */ '../views/BecomeHost/photos.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms/location/amenities/spaces',
    name: 'spaces',
    component: () => import(/* webpackChunkName: "spaces" */ '../views/BecomeHost/spaces.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms/location/amenities',
    name: 'amenities',
    component: () => import(/* webpackChunkName: "amenities" */ '../views/BecomeHost/amenities.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms/location',
    name: 'location',
    component: () => import(/* webpackChunkName: "location" */ '../views/BecomeHost/location.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/becomehost/rooms/bathrooms',
    name: 'bathrooms',
    component: () => import(/* webpackChunkName: "bathrooms" */ '../views/BecomeHost/bathrooms.vue'),
    meta: {
      requiresAuth: true
    }
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
