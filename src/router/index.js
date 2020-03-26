/**
 * Main Vue Router config file
 *
 * @summary Main Vue Router config file
 * @author Zeppelin17 <elzeppelin17@gmail.com>
 *
 * Created at     : 2020-03-26 06:55:32 
 * Last modified  : 2020-03-26 06:55:52
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/exchanges',
    name: 'exchanges',
    component: () => import('../views/Exchanges.vue')
  },
  {
    path: '/calculator',
    name: 'calculator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Calculator.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (/*to, from, savedPosition*/) {
    return { x: 0, y: 0 }
  }  
})

export default router
