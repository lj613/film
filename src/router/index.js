import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie'
import CinemaRouter from './cinema'
import mineRouter from './mine'
Vue.use(VueRouter)

  const routes = [
    MovieRouter,
    CinemaRouter,
    mineRouter,
    {
      path:'/',
      redirect:'/movie'
    }
]

const router = new VueRouter({
  routes
})

export default router
