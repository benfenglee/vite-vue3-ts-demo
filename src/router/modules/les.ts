
import Home from '@/pages/les/Home/Home.vue'
import RouterManage from '@/pages/les/RouterManage/RouterManage.vue'
import DictManage from '@/pages/les/DictManage/DictManage.vue'
import DeviceManage from '@/pages/les/DeviceManage/DeviceManage.vue'
import CameraManage from '@/pages/les/CameraManage/CameraManage.vue'
export default [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/device_manage',
    name: 'DeviceManage',
    component: DeviceManage,
    meta: {
      title: '设备管理'
    },
  },
  {
    path: '/basis',
    name: 'BasisManage',
    meta: {
      title: '组件管理'
    },
  },
  {

    path: '/camera_manage',
    name: 'CameraManage',
    component: CameraManage,
    meta: {
      title: '摄像头管理'
    },
  },
  {
    path: '/big/big_screen_map',
    name: 'BigScreenMap',
    meta: {
      title: '大屏地图修饰'
    }
  },
  {
    path: '/router_manage',
    name: 'RouterManage',
    component: RouterManage,
    meta: {
      title: '菜单管理'
    }
  },
  {
    path: '/dict_manage',
    name: 'DictManage',
    component: DictManage,
    meta: {
      title: '字典管理'
    }
  },
]