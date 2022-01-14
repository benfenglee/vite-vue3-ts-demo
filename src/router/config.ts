
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
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: 'router_manage',
        name: 'RouterManage',
        component: RouterManage,
        meta: {
          title: '权限管理'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

