import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'
Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
