import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Welcome from '@/views/Welcome'
import Kms from '@/views/dashboard/Kms'
import KmsTutorRegistration from '@/views/Registration'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: Welcome
  },
  {
    path: '/kms/dashboard',
    name: 'KmsDashboard',
    component: Kms
  },
  {
    path: '/kms/tutor/registration',
    name: 'KmsTutorRegistration',
    component: KmsTutorRegistration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
