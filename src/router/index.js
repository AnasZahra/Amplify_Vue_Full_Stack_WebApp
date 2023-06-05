import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import ProfilePage from '../ProfilePage.vue'
import WorkoutPage from '../Workoutpage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/workout',
    name: 'workout',
    component: WorkoutPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
