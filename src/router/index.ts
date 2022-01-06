import * as VueRouter from 'vue-router'
import Home from '@pages/Home/Home.vue'
import Layout from '../layout/layout.vue';
import Login from '../pages/Login/Login.vue'
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
  },
  {
    path:'/login',
    component:Login
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes

})
export default router