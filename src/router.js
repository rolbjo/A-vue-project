import world from './views/world.vue'
import science from './views/science.vue'
import home from './views/home.vue'
import test from './views/test.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: world, path: '/world' },
    { component: science, path: '/science' },
    { component: home, path: '/' },
    { component: test, path: '/test/:msg' }
  ]
})

export default router
