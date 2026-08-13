import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
