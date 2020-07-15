/* eslint-disable */
import store from '../store/store' // your vuex store 
import Vue from 'vue'
import VueRouter from 'vue-router'

import Profile from '../views/loggedIn/Profile.vue'
import Settings from '../views/loggedIn/Settings.vue'
import MirrorSettings from '../views/loggedIn/MirrorSettings.vue'
import UserPictures from '../views/loggedIn/UserPictures.vue'

import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import FrontPage from '../views/notLoggedIn/FrontPage.vue'
import wtf404 from '../views/wtf404.vue'


Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.state.isUserLoggedIn) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.state.isUserLoggedIn) {
    next()
    return
  }
  next('/login')
}

const Glitched404Page = (to, from, next) => {
  store.dispatch('setGlitch', true)
  next()
  return
}


const routes = [
  {
    path: '*',
    name: 'wtf404',
    component: wtf404,
    beforeEnter: Glitched404Page
  },
  {
    path: '/',
    name: 'FrontPage',
    component: FrontPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/notLoggedIn/AboutUs.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/mirror-settings',
    name: 'MirrorSettings',
    component: MirrorSettings,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/user-pictures',
    name: 'UserPictures',
    component: UserPictures,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: ifNotAuthenticated
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
