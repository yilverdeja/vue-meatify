import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Sample from '@/views/Sample.vue'
import Loading from '@/views/Loading.vue'
import Result from '@/views/Result.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sample',
    name: 'Sample',
    component: Sample
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
