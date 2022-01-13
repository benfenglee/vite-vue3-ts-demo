// 基石
import { apiGet, apiPost, apiPut, apiDelete } from '@/utils/request'
// 获取字典
export const getDictQueryAllDictItems = (params: any) => apiGet('/api/v1/sys/dict/queryAllDictItems', params)