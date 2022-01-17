
import Home from '@pages/Home/Home.vue'
import Layout from '../layout/layout.vue';
import Login from '../pages/Login/Login.vue'
import RouterManage from '../pages/RouterManage/RouterManage.vue'
import DictManage from '../pages/DictManage/DictManage.vue'
export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dict_manage',
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
          title: '菜单管理'
        }
      },
      {
        path: 'dict_manage',
        name: 'DictManage',
        component: DictManage,
        meta: {
          title: '字典管理'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

