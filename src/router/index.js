import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Presentation from '../views/Presentation.vue'
import Experience from '../views/Experience.vue'
import Skill from '../views/Skill.vue'
import Project from '../views/Project.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'presentation',
      component: Presentation,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience,
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skill,
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
    }
  ],
})

export default router
