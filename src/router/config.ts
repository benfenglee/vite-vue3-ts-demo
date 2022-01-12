
import Home from '@pages/Home/Home.vue'
import Layout from '../layout/layout.vue';
import Login from '../pages/Login/Login.vue'
import RouterManage from '../pages/RouterManage/RouterManage.vue'
export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: '首页',
        component: Home
      },
      {
        path: 'router_manage',
        name: '路由管理',
        component: RouterManage
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  }
]

