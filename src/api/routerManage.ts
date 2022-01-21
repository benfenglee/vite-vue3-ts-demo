import { apiGet, apiPost, apiPut, apiDelete } from '@/utils/request'
export const getPermissionListUrl = '/sys/permission/list'
export const getPermissionList = (params: any) => apiGet(getPermissionListUrl, params)
