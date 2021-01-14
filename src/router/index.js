import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Opening from '../views/Opening.vue'
import MobileView from '../views/nestedViews/MobileView.vue'
import DesktopView from '../views/nestedViews/DesktopView.vue'
import MultiScreenView from '../views/nestedViews/MultiScreenView.vue'

const routes = [
  {
    path: '/',
    name: 'opening',
    component: Opening
  },
  {
    path: '/home',
    name: 'Home',
    component:Home,
    children: [
      {
        path: 'desktop',
        name: 'desktop',
        component:DesktopView,
      },
      {
        path: 'mobile',
        name: 'mobile',
        component:MobileView,
      },
      {
        path: 'multiple',
        name: 'multiple',
        component:MultiScreenView,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component:About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
