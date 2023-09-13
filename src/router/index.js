import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import AboutView from '../views/AboutView.vue'
import ServiceView from '../views/ServiceView.vue'
import BlogView from '../views/BlogView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/Project',
      name: 'ProjectView',
      component: ProjectView
    },
    {
      path: '/About',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/Service',
      name: 'ServiceView',
      component: ServiceView
    },
    {
      path: '/Blog',
      name: 'BlogView',
      component: BlogView
    },
    {
      path: '/Contact',
      name: 'ContactView',
      component: ContactView
    }
    
  ]
})

export default router
