import { apiGet, apiPost, apiPut, apiDelete } from '@/utils/request'
export const postSysLoginUrl = '/api/v1/sys/login'
export const postSysLogin = (params: any) => apiPost(postSysLoginUrl, params)
