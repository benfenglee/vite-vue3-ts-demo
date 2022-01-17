// 负责引入静态文件
import Single from '@/assets/image/Single.png'
import NotIcon from '@/assets/image/loading.gif'
const state = {
  // 图标
  deviceTypeIcon: {
    1: Single,
  },
  // 该图标主色
  deviceColor: {
    1: '#4D8364',
  },
  // 图标加载不出来时显示
  notIcon: NotIcon
}
const getters = {
  deviceTypeIcon: (state: { deviceTypeIcon: any; }) => state.deviceTypeIcon,
  deviceColor: (state: { deviceColor: any; }) => state.deviceColor,
  notIcon: (state: { notIcon: any; }) => state.notIcon
}
export default {
  namespaced: true,
  state,
  getters
}