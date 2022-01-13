import { apiGet, apiPost, apiPut, apiDelete } from '@/utils/request'
export const postSysLogin = (params: any) => apiPost('/api/v1/sys/login', params)
