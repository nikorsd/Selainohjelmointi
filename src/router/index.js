import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import WallStudio from '../views/Studio/Wall.vue'
import PaletteStudio from '../views/Studio/Palette.vue'

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
    },
    {
        path: '/studio/wall',
        name: 'wall-editor',
        component: WallStudio
    },
    {
        path: '/studio/palette',
        name: 'palette-editor',
        component: PaletteStudio
    }
  ]
})

export default router
