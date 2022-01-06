import * as VueRouter from 'vue-router'
import Home from '@pages/Home/Home.vue'
import Layout from '../layout/layout.vue';
const routes = [
  {
    path:'/',
    component:Layout,
    redirect:'/home',
    children:[
      {
        path:'home',
        component:Home
      }
    ]
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes

})
export default router