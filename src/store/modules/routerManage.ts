import { getPermissionList } from '@/api/routerManage'
export default {
  namespaced: true,
  actions: {
    getPermissionList(context: any, data: any) {
      return getPermissionList(data)
    }
  }
}