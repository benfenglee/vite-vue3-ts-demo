
import Layout from '../layout/layout.vue';
import BigLayout from '../layout/bigscreen.vue'

import Login from '../pages/Login/Login.vue'
import BigScreenMap from '@/pages/bigscreen/BigScreenMap/BigScreenMap.vue'
import BasisManage from '@/pages/basisManage/basisManage.vue'

import les from './modules/les'
export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dict_manage',
    children: les
  },
  {
    path: '/basis',
    name: 'BasisManage',
    component: BasisManage,
    meta: {
      title: '自定义组件'
    }
  },
  {
    path: '/big',
    component: BigLayout,
    redirect: '/big/big_screen_map',
    children: [
      {
        path: '/big/big_screen_map',
        name: 'BigScreenMap',
        component: BigScreenMap,
        meta: {
          title: '大屏地图修饰'
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

